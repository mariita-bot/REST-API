import { Controller, Get, HttpStatus, Res, Post, Req, Put } from '@nestjs/common';
import { Response, Request } from 'express';
import { PedidoDetalleService } from '../services/pedidodetalle.service';
import { PedidoDetalle } from 'src/entities/pedidodetalle.entity';
import { PedidosService } from 'src/services/pedido.service';
import { ProductosService } from 'src/services/producto.service';

@Controller('api/pedidodetalle')
export class PedidoDetalleController {

   constructor(
       private PedidoDetalleService: PedidoDetalleService,
       private pedidoService: PedidosService,
       private productoService: ProductosService
   ){ }

   @Get()
   findAll(@Res() res: Response) {
       this.PedidoDetalleService.findAll().then(pedidodetalle => {
            res.status(HttpStatus.OK).json(pedidodetalle);
       });
   }
   @Post()
   async Crear(@Req() req: Request, @Res() res: Response) {
        const pedido = await this.pedidoService.findOne(req.body["IdPedido"])
        const producto = await this.productoService.findOne(req.body["IdProducto"])
        const ped = new PedidoDetalle();
        ped.Cantidad = req.body["Cantidad"];
        ped.Fecha = new Date();
        //subtotal(pendiente)
        ped.Pedido = pedido;
        ped.Producto = producto;



        this.PedidoDetalleService.save(ped);
        return res.status(HttpStatus.CREATED).json(ped);
   }

   @Put()
   async Actualizar(@Req() req: Request, @Res() res: Response) {
          const producto = await this.productoService.findOne(req.body["IdFlujodinero"])
        
          const ped = await this.PedidoDetalleService.findOne(req.body["IdPedidoDetalle"])

          ped.Cantidad = req.body["Cantidad"];
          ped.Producto = producto;
       
          this.PedidoDetalleService.save(ped);

          return res.status(HttpStatus.OK).json(ped);
   }
}