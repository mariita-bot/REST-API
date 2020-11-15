import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('api/cliente')
export class LoginController {

   private clientes: [];

   constructor(){ }

   @Get()
   findAll(@Res() res: Response) { 
      res.status(HttpStatus.OK).json('findAlls');
   }

   @Get()
   Auntenticar(@Res() res: Response) { 
      res.status(HttpStatus.OK).json('findAlls');
   }
} 