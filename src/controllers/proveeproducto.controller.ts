import { Controller, Get, Put , HttpStatus, Res, Req, Post } from '@nestjs/common';
import { Response, Request } from 'express';
import { ProveeProductoService } from '../services/proveeproducto.service';
import { ProveedoresService } from 'src/services/proveedor.service';
import { ProductosService } from 'src/services/producto.service';
import { StockProductoService } from '../services/stockproducto.service';

import { ProveeProducto } from 'src/entities/proveeproducto.entity';
import { StockProducto } from 'src/entities/stockproducto.entity';

@Controller('api/proveeproducto')
export class ProveeProductoController {

   constructor(
       private proveeProductoService: ProveeProductoService,
       private productoService: ProductosService,
       private proveedorService: ProveedoresService,
       private stockProductoService: StockProductoService
   ){ }

   @Get()
   findAll(@Res() res: Response) {
       this.proveeProductoService.findAll().then(proveeproducto => {
            res.status(HttpStatus.OK).json(proveeproducto);
       });
   }
   
   @Post()
   async Crear(@Req() req: Request, @Res() res: Response) {

        const stockProducto = new StockProducto();
        stockProducto.Cantidad = req.body["Cantidad"];
        stockProducto.Fecha_Ingreso = new Date();
        stockProducto.Precio_Entrada = req.body["PrecioEntrada"];
        await this.stockProductoService.save(stockProducto);

        const producto = await this.productoService.findOne(req.body["IdProducto"])
        const proveedor = await this.proveedorService.findOne(req.body["IdProveedor"]) 
        const prove = new ProveeProducto();
        prove.Cantidad = req.body["Cantidad"];
        prove.FechaEntrada = new Date();
        prove.MontoTotal = req.body["MontoTotal"];
        prove.Observacion = req.body["Observacion"];
        prove.PrecioEntrada = req.body["PrecioEntrada"];
        prove.Producto = producto;
        prove.Proveedor = proveedor;

        await this.proveeProductoService.save(prove);

        stockProducto.Proveeproducto = prove;

        await this.stockProductoService.save(stockProducto);

        return res.status(HttpStatus.CREATED).json(prove);
   }

   
   @Put()
   async Actualizar(@Req() req: Request, @Res() res: Response) {
          const producto = await this.productoService.findOne(req.body["IdProducto"])
          const proveedor = await this.proveedorService.findOne(req.body["IdProveedor"]) 
    
          const prove = await this.proveeProductoService.findOne(req.body["IdProveeProducto"])
          
          prove.Cantidad = req.body["Cantidad"];
          prove.Observacion = req.body["Observacion"];
          prove.PrecioEntrada = req.body["PrecioEntrada"];
          prove.Producto = producto;
          prove.Proveedor = proveedor;       
          
          this.proveeProductoService.save(prove);

          return res.status(HttpStatus.OK).json(prove);
   }
}