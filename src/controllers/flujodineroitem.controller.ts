import { Controller, Get, Put , HttpStatus, Res, Req, Post } from '@nestjs/common';
import { Response, Request } from 'express';
import { FlujodineroitemService } from '../services/flujodineroitem.service';
import { Flujodineroitem } from 'src/entities/flujodineroitem.entity';
import { BilleteService } from 'src/services/billete.service';
import { FlujodineroService } from 'src/services/flujodinero.service';

@Controller('api/flujodineroitem')
export class FlujodineroitemController {

   constructor(
       private FlujodineroitemService: FlujodineroitemService,
       private billeteService: BilleteService,
       private flujodineroService: FlujodineroService 
   ){ }

   @Get()
   findAll(@Res() res: Response) {
       this.FlujodineroitemService.findAll().then(flujodineroitem => {
            res.status(HttpStatus.OK).json(flujodineroitem);
       });
   }
   @Post()
   async Crear(@Req() req: Request, @Res() res: Response) {
        const billete = await this.billeteService.findOne(req.body["IdBillete"])
        const flujodinero = await this.flujodineroService.findOne(req.body["IdFlujodinero"])
        const flui = new Flujodineroitem();
        flui.Cantidad = req.body["Cantidad"];
        flui.Denominacion = req.body["Denominacion"];
        flui.Billete = billete;
        flui.Flujodinero = flujodinero;
  
        this.FlujodineroitemService.save(flui);
        return res.status(HttpStatus.CREATED).json(flui);
   }

} 