import { Controller, Get, Put , HttpStatus, Res, Req, Post } from '@nestjs/common';
import { Response, Request } from 'express';
import { CajachicaService } from '../services/cajachica.service';
import { Cajachica } from 'src/entities/cajachica.entity';

@Controller('api/cajachica')
export class CajachicaController {

   constructor(
       private cajachicaService: CajachicaService
   ){ }

   @Get()
   findAll(@Res() res: Response) {
       this.cajachicaService.findAll().then(cajachicas => {
            res.status(HttpStatus.OK).json(cajachicas);
       });
   }
    
   @Put()
   async CierraCaja(@Req() req: Request, @Res() res: Response) {

          const cajc = await this.cajachicaService.findOne(req.body["IdCajachica"])

          cajc.Closed_at = new Date();
          cajc.CantidadDeCierre = req.body["CantidadDeCierre"];       
          this.cajachicaService.save(cajc);

          return res.status(HttpStatus.OK).json(cajc);
   }

   @Post()
   AperturaCaja(@Req() req: Request, @Res() res: Response) {
        
        const cajc = new Cajachica();
    
        cajc.CantidadDeApertura = req.body["CantidadDeApertura"];
        cajc.Created_at = new Date();       

        this.cajachicaService.save(cajc);
        return res.status(HttpStatus.CREATED).json(cajc);
   }

   
  // @Put()
   //async Actualizar(@Req() req: Request, @Res() res: Response) {

     //     const cajc = await this.cajachicaService.findOne(req.body["IdCajachica"])

       //   cajc.CantidadDeApertura = req.body["CantidadDeApertura"];
         // cajc.CantidadDeCierre = req.body["CantidadDeCierre"];
          //; 
          
          //this.cajachicaService.save(cajc);

          //return res.status(HttpStatus.OK).json(cajc);
   //}
} 