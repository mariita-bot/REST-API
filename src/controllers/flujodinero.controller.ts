import { Controller, Get, Put , HttpStatus, Res, Req, Post } from '@nestjs/common';
import { Response, Request } from 'express';
import { FlujodineroService } from '../services/flujodinero.service';
import { Flujodinero } from 'src/entities/flujodinero.entity';

@Controller('api/flujodinero')
export class FlujodineroController {

   constructor(
       private FlujodineroService: FlujodineroService
   ){ }

   @Get()
   findAll(@Res() res: Response) {
       this.FlujodineroService.findAll().then(flujodinero => {
            res.status(HttpStatus.OK).json(flujodinero);
       });
   }
   @Post()
   Crear(@Req() req: Request, @Res() res: Response) {
        const flu = new Flujodinero();
        flu.Created_at = new Date();
        flu.Egreso_cordoba = req.body["Egreso_cordoba"];
        flu.Ingreso_cordoba = req.body["Ingreso_cordoba"];
        flu.Observaciones = req.body["Observaciones"];
        flu.Usuario_Nombre = req.body["Usuario_Nombre"];
        //saldo(pendiente)        

        this.FlujodineroService.save(flu);
        return res.status(HttpStatus.CREATED).json(flu);
   }

}