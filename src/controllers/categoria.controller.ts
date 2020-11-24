import { Controller, Get, HttpStatus, Res, Post, Req, Put, Delete, Param } from '@nestjs/common';
import { Response, Request } from 'express';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from 'src/entities/categoria.entity'
@Controller('api/categoria')
export class CategoriaController {

   constructor(
       private CategoriaService: CategoriaService
   ){ }

   @Get()
   async findAll(@Res() res: Response) {
       await this.CategoriaService.findAll().then(categoria => {
            res.status(HttpStatus.OK).json(categoria);
       });
   }

   @Get(":id")
   async categoriaxId(@Param("id") id:string){
        const categoria = await this.CategoriaService.findOne(Number(id));

        return categoria;
   }  

   @Post()
   async Crear(@Req() req: Request, @Res() res: Response) {
        const cat = new Categoria();
        cat.NombreCategoria = req.body["NombreCategoria"];
    

        await this.CategoriaService.save(cat);
        return res.status(HttpStatus.CREATED).json(cat);
   }

   
   @Put(":id")
   async Actualizar(@Param("id") id:string ,@Req() req: Request, @Res() res: Response) {

        const cat = await this.CategoriaService.findOne(Number(id));

        cat.NombreCategoria = req.body["NombreCategoria"];
    
    
        await this.CategoriaService.save(cat);

        return res.status(HttpStatus.OK).json(cat);
   }

   @Delete(":id")
   async Borrar (@Param("id") id:string , @Req() req: Request, @Res() res: Response ) { 

      
       const categoria = await this.CategoriaService.findOne(Number(id));
       categoria.Activo = 0;
       await this.CategoriaService.save(categoria);

       return res.status(HttpStatus.OK).json(categoria);
   }
} 