import { Controller, Get, Put , HttpStatus, Res, Req, Post } from '@nestjs/common';
import { Response, Request } from 'express';
import { ProveedoresService } from '../services/proveedor.service';
import { Proveedor } from 'src/entities/proveedor.entity';

@Controller('api/proveedor')
export class ProveedorController {

   constructor(private proveedoresService: ProveedoresService){ }

   @Get()
   findAll(@Res() res: Response) {
       this.proveedoresService.findAll().then(proveedores => {
            res.status(HttpStatus.OK).json(proveedores);
       });
   }

   @Post()
   Crear(@Req() req: Request, @Res() res: Response) {
        const prov = new Proveedor();
        prov.NombreProveedor = req.body["NombreProveedor"];
        prov.Direccion = req.body["Direccion"];
        prov.Telefono = req.body["Telefono"];

        this.proveedoresService.save(prov);
        return res.status(HttpStatus.CREATED).json(prov);
   }

   
   @Put()
   async Actualizar(@Req() req: Request, @Res() res: Response) {

          const prov = await this.proveedoresService.findOne(req.body["IdProveedor"])

          prov.Direccion = req.body["Direccion"];
          prov.NombreProveedor = req.body["NombreProveedor"];
          prov.Telefono = req.body["Telefono"];


          this.proveedoresService.save(prov);

          return res.status(HttpStatus.OK).json(prov);
   }
} 