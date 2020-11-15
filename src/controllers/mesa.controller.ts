import { Controller, Get, Put , HttpStatus, Res, Req, Post } from '@nestjs/common';
import { Response, Request } from 'express';
import { MesasService } from '../services/mesa.service';
import { Mesa } from 'src/entities/mesa.entity';

@Controller('api/mesa')
export class MesaController {

   constructor(private mesasService: MesasService){ }

   @Get()
   findAll(@Res() res: Response) {
       this.mesasService.findAll().then(mesas => {
            res.status(HttpStatus.OK).json(mesas);
       });
   }

   @Put()
   async cambiarEstado(@Req() req: Request, @Res() res: Response) {
       
    const mesa = await this.mesasService.findOne(req.body["IdMesa"])
    
    mesa.Estado = req.body["Estado"];

    this.mesasService.save(mesa);

    return res.status(HttpStatus.OK).json(mesa);

   }
   
   @Post()
   Crear(@Req() req: Request, @Res() res: Response) {
        const me = new Mesa();
        me.Descripcion = req.body["Descripcion"];
        me.Estado = req.body["Estado"];
        me.Numero = req.body["Numero"];
        me.Reservas = req.body["Reservas"];
        

        this.mesasService.save(me);
        return res.status(HttpStatus.CREATED).json(me);
   }

   
   @Put()
   async Actualizar(@Req() req: Request, @Res() res: Response) {

          const me = await this.mesasService.findOne(req.body["IdMesa"])

          me.Descripcion = req.body["Descripcion"];
          me.Estado = req.body["estado"];
          me.Numero = req.body["Numero"];
          me.Reservas = req.body["Reservas"]; 
          
          this.mesasService.save(me);

          return res.status(HttpStatus.OK).json(me);
   }
} 