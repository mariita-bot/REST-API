import { Controller, Get, HttpStatus, Res, Post, Req, Put, Param, Patch, Header } from '@nestjs/common';
import { Response, Request } from 'express';
import * as PDFDocument from 'pdfkit';
import { PedidosService } from '../services/pedido.service';
import { Pedido } from 'src/entities/pedido.entity';
import { EmpleadosService } from 'src/services/empleado.service';
import { FlujodineroService } from 'src/services/flujodinero.service';
import { PedidoDetalle } from 'src/entities/pedidodetalle.entity';
import { ProductosService } from 'src/services/producto.service';
import { PedidoDetalleService } from 'src/services/pedidodetalle.service';
import { ProveeProductoService } from 'src/services/proveeproducto.service';
import { ProveeProducto } from 'src/entities/proveeproducto.entity';
import { Cliente } from 'src/entities/cliente.entity';
import { ClienteService } from 'src/services/cliente.service';

@Controller('api/pedido')
export class PedidoController {

   constructor(
       private pedidosService: PedidosService,
       private empleadoService: EmpleadosService,
       private flujodineroService: FlujodineroService,
       private productoService: ProductosService,
       private pedidoDetalleService: PedidoDetalleService,
       private proveeProductoService: ProveeProductoService,
       private clienteService : ClienteService
       ){ }

   @Get()
    async findAll(@Res() res: Response) {
       await this.pedidosService.findWithDetalles().then(pedidos => {
        res.status(HttpStatus.OK).json(pedidos);
       });
   }

   @Get(':id')
   async pedidoPorMesa(@Param('id') id, @Req() req: Request, @Res() res: Response) {
       const pedidos = await this.pedidosService.findByMesa(parseInt(id));

       return res.status(HttpStatus.OK).json(pedidos);
   }

   @Post('pagarpedido/:id')
   async pagarPedido(@Param('id') id, @Req() req: Request, @Res() res: Response) {
       const pedido = await this.pedidosService.findOne( parseInt(id) );
       pedido.Estado = 1;
       await this.pedidosService.save(pedido);


        return res.sendStatus(HttpStatus.OK).json('OK');
    }

   @Post()
   async Crear(@Req() req: Request, @Res() res: Response) {

        const empleado = await this.empleadoService.findById(req.body['Mesero']);

        const nuevoCliente = new Cliente();
        nuevoCliente.Cedula = req.body['CedulaCliente'];
        nuevoCliente.NombreCliente = req.body['NombreCliente'];
        nuevoCliente.Telefono = req.body['TelefonoCliente'];
        
        await this.clienteService.save(nuevoCliente);
        
        const pedido = new Pedido();
        pedido.MesaNumero = parseInt(req.body['NumMesa']);
        pedido.Estado = req.body['Pagado'] ;
        pedido.Empleado = empleado;
        pedido.Cliente = nuevoCliente;
        pedido.Observacion = req.body['Observacion'];

        await this.pedidosService.save(pedido);

        let provProductos = await this.proveeProductoService.findAllAndProducto();
        
        for(let element of req.body["productos"]){
            let pedidoDetalle = new PedidoDetalle();
            let producto = await this.productoService.findOne(element.IdProducto);

            let cant = parseInt(element.Cantidad);

            pedidoDetalle.Cantidad = cant;
            pedidoDetalle.Fecha = new Date();
            pedidoDetalle.Subtotal = (cant * element.PrecioVenta);
            pedidoDetalle.Producto = producto;
            pedidoDetalle.Pedido = pedido;

            //console.log(pedidoDetalle);

            await this.pedidoDetalleService.save(pedidoDetalle);

            /* no modificando stock temporalmente *********
            //Mostrar stock del producto a comprar
            let provProductosFiltered = provProductos.filter((el: any) => (el.Producto.IdProducto === element.IdProducto && el.Cantidad > 0));

            //Restar cantidad a comprar del stock
            let cant2 = 0;
            do {
                provProductosFiltered.forEach((e: any) => {
                    if(cant2 !== cant) {
                        e.Cantidad = (e.Cantidad -1);
                        cant2++;
                    }
                });
            } while(cant2 !== cant);

            // Actualizar stock
            provProductosFiltered.forEach((e: any) => {
                this.proveeProductoService.save(e);
            })
        }
        */
    }    
        return res.status(HttpStatus.CREATED).json('CREATED');
   }
   
   @Put()
   async Actualizar(@Req() req: Request, @Res() res: Response) {
          const empleado = await this.empleadoService.findOne(req.body["IdEmpleado"])
          const flujodinero = await this.flujodineroService.findOne(req.body["IdFlujodinero"])
        
          const pe = await this.pedidosService.findOne(req.body["IdPedido"])

          pe.Cliente = req.body["cliente"];

          pe.Empleado = req.body["Empleado"];
          pe.Estado = req.body["Estado"];
          pe.Flujodinero = flujodinero;
          pe.Empleado = empleado;
          pe.Observacion = req.body["Observacion"];
       
          this.pedidosService.save(pe);

          return res.status(HttpStatus.OK).json(pe);
   }
} 