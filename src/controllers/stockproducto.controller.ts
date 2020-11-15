import { Controller, Get, Put , HttpStatus, Res, Req, Post } from '@nestjs/common';
import { Response, Request } from 'express';
import { StockProductoService } from '../services/stockproducto.service';
import { StockProducto } from 'src/entities/stockproducto.entity';

@Controller('api/stockproducto')
export class StockProductoController {

   constructor(
       private StockProductoService: StockProductoService
   ){ }

   @Get()
   findAll(@Res() res: Response) {
       this.StockProductoService.findAll().then(stockproducto => {
            res.status(HttpStatus.OK).json(stockproducto);
       });
   }
   @Post()
   Crear(@Req() req: Request, @Res() res: Response) {
        const st = new StockProducto();
       // st.Cantidad = req.body["Cantidad"]; suma de proveproducto, resta de detallepedido
       
        this.StockProductoService.save(st);
        return res.status(HttpStatus.CREATED).json(st);
   }

  
}