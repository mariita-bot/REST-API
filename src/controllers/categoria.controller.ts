import { Controller, Get, HttpStatus, Res, Post, Req, Put } from '@nestjs/common';
import { Response, Request } from 'express';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from 'src/entities/categoria.entity'
@Controller('api/categoria')
export class CategoriaController {

   constructor(
       private CategoriaService: CategoriaService
   ){ }

   @Get()
   findAll(@Res() res: Response) {
       this.CategoriaService.findAll().then(categoria => {
            res.status(HttpStatus.OK).json(categoria);
       });
   }
   @Post()
   Crear(@Req() req: Request, @Res() res: Response) {
        const cat = new Categoria();
        cat.NombreCategoria = req.body["NombreCategoria"];
    

        this.CategoriaService.save(cat);
        return res.status(HttpStatus.CREATED).json(cat);
   }

   
   @Put()
   async Actualizar(@Req() req: Request, @Res() res: Response) {

          const cat = await this.CategoriaService.findOne(req.body["IdCategoria"])

          cat.NombreCategoria = req.body["NombreCategoria"];
      
       
          this.CategoriaService.save(cat);

          return res.status(HttpStatus.OK).json(cat);
   }
} 