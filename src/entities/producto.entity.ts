import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne
} from 'typeorm';

import { PedidoDetalle } from './pedidodetalle.entity';
import { Categoria } from './categoria.entity';
import { ProveeProducto } from './proveeproducto.entity';
import { StockProducto } from './stockproducto.entity';

@Entity()
export class Producto {
    @PrimaryGeneratedColumn()
    IdProducto: number;

    @Column()
    NombreProducto: string;

    @Column("float")
    PrecioVenta: number;

    @Column("tinyint")
    Estado: number;

    @Column()
    Descripcion: string;

    @Column()
    Tamanio: number;
    
    @OneToMany(type => PedidoDetalle, pedidoDetalle => pedidoDetalle.Producto)
    PedidoDetalles: PedidoDetalle[];

    @OneToMany(type => ProveeProducto, proveeProducto => proveeProducto.Producto)
    ProveeProductos: ProveeProducto[];
    
    @ManyToOne(type => Categoria, categoria => categoria.Productos)
    Categoria: Categoria;
}