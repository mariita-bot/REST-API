import { Controller, Get, Put , HttpStatus, Res, Req, Post, Delete, Param } from '@nestjs/common';
import { Response, Request } from 'express';
import { ProveedoresService } from '../services/proveedor.service';
import { Proveedor } from 'src/entities/proveedor.entity';

@Controller('api/proveedor')
export class ProveedorController {

   constructor(private proveedoresService: ProveedoresService){ }

   @Get()
   async findAll(@Res() res: Response) {
       await this.proveedoresService.findAll().then(proveedores => {
            res.status(HttpStatus.OK).json(proveedores);
       });
   }

   @Get(":id")
   async proveedorxId(@Param("id") id:string){
      const proveedor = await this.proveedoresService.findOne(Number(id));

      return proveedor;
   }  

   @Post()
   async Crear(@Req() req: Request, @Res() res: Response) {
        const prov = new Proveedor();
        prov.NombreProveedor = req.body["NombreProveedor"];
        prov.Direccion = req.body["Direccion"];
        prov.Telefono = req.body["Telefono"];

        await this.proveedoresService.save(prov);
        return res.status(HttpStatus.CREATED).json(prov);
     }

   
   @Put(":id")
   async Actualizar( @Param("id") id:string ,@Req() req: Request, @Res() res: Response) {

      const prov = await this.proveedoresService.findOne( Number(id) );

      prov.Direccion = req.body["Direccion"];
      prov.NombreProveedor = req.body["NombreProveedor"];
      prov.Telefono = req.body["Telefono"];


      await this.proveedoresService.save(prov);

      return res.status(HttpStatus.OK).json(prov);
   }

   @Delete(":id")
    async Borrar (@Param("id") id:string , @Req() req: Request, @Res() res: Response ) { 

       
        const proveedor = await this.proveedoresService.findOne(Number(id));
        proveedor.Activo = 0;
        await this.proveedoresService.save(proveedor);

        return res.status(HttpStatus.OK).json(proveedor);
    }

} 