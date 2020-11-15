import { Controller, Get, Put , HttpStatus, Res, Req, Post } from '@nestjs/common';
import { Response, Request } from 'express';
import { ReservaService } from '../services/reserva.service';
import { Reserva } from 'src/entities/reserva.entity';

@Controller('api/reserva')
export class ReservaController {

   constructor(
       private ReservaService: ReservaService
   ){ }

   @Get()
   findAll(@Res() res: Response) {
       this.ReservaService.findAll().then(reserva => {
            res.status(HttpStatus.OK).json(reserva);
       });
   }
   @Post()
   Crear(@Req() req: Request, @Res() res: Response) {
        const re = new Reserva();
        //re.Cliente = req.body["Cliente"]; crear si no existe
        re.Fecha = req.body["Fecha"];
        re.Mesa = req.body["Mesa"];
      
        

        this.ReservaService.save(re);
        return res.status(HttpStatus.CREATED).json(re);
   }

   
   @Put()
   async Actualizar(@Req() req: Request, @Res() res: Response) {

          const re = await this.ReservaService.findOne(req.body["IdReserva"])

         // re.Cliente = req.body["Cliente"];//pediente new cliente
          re.Fecha = req.body["Fecha"];
          re.Mesa = req.body["Mesa"];
         
          this.ReservaService.save(re);

          return res.status(HttpStatus.OK).json(re);
   }
}