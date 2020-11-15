import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PedidosService } from './services/pedido.service';
import { MesasService } from './services/mesa.service';
import { ProveedoresService } from './services/proveedor.service';
import { EmpleadosService } from './services/empleado.service';

import { PedidoController } from './controllers/pedido.controller';
import { MesaController } from './controllers/mesa.controller';
import { ProveedorController } from './controllers/proveedor.controller';

import { Pedido } from './entities/pedido.entity';
import { Mesa } from './entities/mesa.entity';
import { Proveedor } from './entities/proveedor.entity';
import { Empleado } from './entities/empleado.entity';
import { Producto } from './entities/producto.entity';
import { ProductosService } from './services/producto.service';
import { ProductoController } from './controllers/producto.controller';
import { Cajachica } from './entities/cajachica.entity';
import { CajachicaService } from './services/cajachica.service';
import { CajachicaController } from './controllers/cajachica.controller';
import { Flujodineroitem } from './entities/flujodineroitem.entity';
import { FlujodineroitemService } from './services/flujodineroitem.service';
import { FlujodineroitemController } from './controllers/flujodineroitem.controller';
import { Categoria } from './entities/categoria.entity';
import { CategoriaService } from './services/categoria.service';
import { CategoriaController } from './controllers/categoria.controller';
import { Billete } from './entities/billete.entity';
import { BilleteService } from './services/billete.service';
import { BilleteController } from './controllers/billete.controller';
import { Cargo } from './entities/cargo.entity';
import { CargoService } from './services/cargo.service';
import { CargoController } from './controllers/cargo.controller';
import { Cliente } from './entities/cliente.entity';
import { ClienteService } from './services/cliente.service';
import { ClienteController } from './controllers/cliente.controller';
import { Flujodinero } from './entities/flujodinero.entity';
import { FlujodineroService } from './services/flujodinero.service';
import { FlujodineroController } from './controllers/flujodinero.controller';
import { PedidoDetalle } from './entities/pedidodetalle.entity';
import { PedidoDetalleService } from './services/pedidodetalle.service';
import { PedidoDetalleController } from './controllers/pedidodetalle.controller';
import { ProveeProducto } from './entities/proveeproducto.entity';
import { ProveeProductoService } from './services/proveeproducto.service';
import { ProveeProductoController } from './controllers/proveeproducto.controller';
import { Reserva } from './entities/reserva.entity';
import { ReservaService } from './services/reserva.service';
import { ReservaController } from './controllers/reserva.controller';
import { StockProducto } from './entities/stockproducto.entity';
import { StockProductoService } from './services/stockproducto.service';
import { StockProductoController } from './controllers/stockproducto.controller';
import { ReporteController } from './controllers/reportes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([
    Pedido, 
    Mesa, 
    Proveedor, 
    Producto, 
    Cajachica,
    Cargo,
    Flujodineroitem,
    Categoria,
    Billete,
    Cliente,
    Flujodinero,
    PedidoDetalle,
    ProveeProducto,
    Reserva,
    StockProducto,
    Empleado
    
  ])],
  providers: [
    PedidosService, 
    MesasService,
    ProveedoresService,
    ProductosService,
    CajachicaService,
    FlujodineroitemService,
    CategoriaService,
    BilleteService,
    ClienteService,
    CargoService,
    FlujodineroService,
    PedidoDetalleService,
    ProveeProductoService,
    ReservaService,
    StockProductoService,
    EmpleadosService
  ],
  controllers: [
    PedidoController, 
    MesaController,
    ProveedorController,
    ProductoController,
    CajachicaController,
    FlujodineroitemController,
    CategoriaController,
    BilleteController,
    CargoController,
    ClienteController,
    FlujodineroController,
    PedidoDetalleController,
    ProveeProductoController,
    ReservaController,
    StockProductoController,
    ReporteController
  ],
})
export class CoreFeatureModule {}