import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { ClienteService } from '../services/cliente.service';

@Controller('api/cliente')
export class ClienteController {

   constructor(
       private ClienteService: ClienteService
   ){ }

   @Get()
   findAll(@Res() res: Response) {
       this.ClienteService.findAll().then(cliente => {
            res.status(HttpStatus.OK).json(cliente);
       });
   }
}