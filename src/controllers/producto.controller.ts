import { Controller, Get, HttpStatus, Res, Req, Post, Put, Param } from '@nestjs/common';
import { Response, Request } from 'express';
import { Producto } from '../entities/producto.entity';
import { ProductosService } from '../services/producto.service';
import { ProveeProductoService } from 'src/services/proveeproducto.service';
import { CategoriaService } from 'src/services/categoria.service';

// type ProductoEnd = { 
//      [K in keyof Producto]: any,
//      Stock: any[]
// }

@Controller('api/producto')
export class ProductoController {

   constructor(
        private productosService: ProductosService,
        private proveeProductoService: ProveeProductoService,
        private categoriaService : CategoriaService 
     ){ }


  /**
   * Metodo para encontrar el stock de productos.
   */
  public FindStockProductos(productos: Producto[], proveeProductos: any[]) {



     productos.forEach(p => {
          let x = {
               stock: 2,
               ...p
          };

     });


  }

   @Get()
   async findAll(@Res() res: Response) {
     const productosWithStock = await this.productosService.findWithStock();
     //const proveeProductos = await this.proveeProductoService.findAll();

     //this.FindStockProductos(productos, proveeProductos);

     res.status(HttpStatus.OK).json(productosWithStock);

   }

   @Get(":id")
   async productoxId(@Param("id") id:string){
        const producto = await this.productosService.findOne(Number(id));

        return producto;
   }  

   @Post()
   async Crear(@Req() req: Request, @Res() res: Response) {
        const prod = new Producto();

        const estado: number = (req.body["Estado"] === true) ? 1 : 0;

        prod.NombreProducto = req.body["NombreProducto"];
        prod.Descripcion = req.body["Descripcion"];
        prod.PrecioVenta = req.body["PrecioVenta"];
        prod.Estado = estado;
        prod.Tamanio = req.body["Tamanio"]; //almacenar en ml

        const Categoria = await this.categoriaService.findOne(req.body["IdCategoria"])

        console.log(Categoria);

        prod.Categoria = Categoria;

        this.productosService.save(prod);
        return res.status(HttpStatus.CREATED).json(prod);
   }

   @Put()
   async Actualizar(@Req() req: Request, @Res() res: Response) {

          const prod = await this.productosService.findOne(req.body["IdProducto"])

          const estado = (req.body["Estado"] === true) ? 1 : 0;

          prod.NombreProducto = req.body["NombreProducto"];
          prod.Descripcion = req.body["Descripcion"];
          prod.PrecioVenta = req.body["PrecioVenta"];
          prod.Estado = estado;
          prod.Tamanio = req.body["Tamanio"];

          this.productosService.save(prod);

          return res.status(HttpStatus.OK).json(prod);
   }
} 