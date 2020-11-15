import { Controller, Get, Put , HttpStatus, Res, Req, Post } from '@nestjs/common';
import { Response, Request } from 'express';
import { CargoService } from '../services/cargo.service';
import { Cargo } from 'src/entities/cargo.entity';

@Controller('api/cargo')
export class CargoController {

   constructor(
    private cargoService: CargoService
   ){ }

   @Get()
   findAll(@Res() res: Response) {
       this.cargoService.findAll().then(cargo => {
            res.status(HttpStatus.OK).json(cargo);
       });
   }
   
   @Post()
   Crear(@Req() req: Request, @Res() res: Response) {
        const car = new Cargo();
        car.NombreCargo = req.body["NombreCargo"]
      
        this.cargoService.save(car);
        return res.status(HttpStatus.CREATED).json(car);
   }

   
   @Put()
   async Actualizar(@Req() req: Request, @Res() res: Response) {

          const car = await this.cargoService.findOne(req.body["IdEmpleado"])
          car.NombreCargo

          this.cargoService.save(car);

          return res.status(HttpStatus.OK).json(car);
   }

}