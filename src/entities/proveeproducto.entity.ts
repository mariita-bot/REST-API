import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany
} from 'typeorm';
import { Proveedor } from './proveedor.entity';
import { Producto } from './producto.entity';
import { StockProducto } from './stockproducto.entity';

@Entity()
export class ProveeProducto {
    @PrimaryGeneratedColumn()
    IdProveeProducto: number;

    @Column()
    Cantidad: number;

    @Column()
    FechaEntrada: Date;

    @Column("float")
    PrecioEntrada: number;

    @Column()
    Observacion: string;

    @Column("float")
    MontoTotal: number;

    @ManyToOne(type => Proveedor, proveedor => proveedor.ProveeProductos)
    Proveedor: Proveedor;

    @ManyToOne(type => Producto, producto => producto.ProveeProductos)
    Producto: Producto;

    @OneToMany(type => StockProducto, stockProducto => stockProducto.Proveeproducto)
    Stockproductos: StockProducto[];
}