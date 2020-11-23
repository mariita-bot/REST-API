import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Producto } from './producto.entity';
import { ProveeProducto } from './proveeproducto.entity';
import { PedidoDetalle } from './pedidodetalle.entity';

@Entity()
export class StockProducto {
    @PrimaryGeneratedColumn()
    IdStock: number;

    @Column()
    Cantidad: number;

    @Column()
    Fecha_Ingreso: Date;

    @Column("float")
    Precio_Entrada: number;

    @Column({type: "tinyint", default: 1})
    Activo: number;

    @ManyToOne(type => ProveeProducto, proveeproducto => proveeproducto.Stockproductos)
    Proveeproducto: ProveeProducto;

    @ManyToOne(type => PedidoDetalle, pedidodetalle => pedidodetalle.StockProductos)
    PedidoDetalle: PedidoDetalle;
}