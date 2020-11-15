import { Controller, Get, Put , HttpStatus, Res, Req, Post } from '@nestjs/common';
import { Response, Request } from 'express';
import { BilleteService } from '../services/billete.service';
import { Billete } from 'src/entities/billete.entity';

@Controller('api/billete')
export class BilleteController {

   constructor(
       private BilleteService: BilleteService
   ){ }

   @Get()
   findAll(@Res() res: Response) {
       this.BilleteService.findAll().then(billete => {
            res.status(HttpStatus.OK).json(billete);
       });
   }
   
   @Post()
   Crear(@Req() req: Request, @Res() res: Response) {
        
        const bi = new Billete();
        bi.Nombre = req.body["Nombre"];
        bi.Valor = req.body["Valor"];
        
        this.BilleteService.save(bi);
        return res.status(HttpStatus.CREATED).json(bi);
   }

   
   @Put()
   async Actualizar(@Req() req: Request, @Res() res: Response) {

          const bi = await this.BilleteService.findOne(req.body["IdBillete"])

          bi.Nombre = req.body["Nombre"];
          bi.Valor = req.body["Valor"];
        
          this.BilleteService.save(bi);

          return res.status(HttpStatus.OK).json(bi);
   }
}