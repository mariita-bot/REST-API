import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  ManyToOne,
  OneToMany
} from 'typeorm';
import { Pedido } from './pedido.entity';
import { Producto } from './producto.entity';
import { StockProducto } from './stockproducto.entity';

@Entity()
export class PedidoDetalle {

  @PrimaryGeneratedColumn()
  IdPedidoDetalle: number;

  @Column("float")
  Subtotal: number;

  @Column()
  Cantidad: number;

  @Column("datetime")
  Fecha: Date;

  @ManyToOne(type => Pedido, pedido => pedido.PedidoDetalles)
  Pedido: Pedido;

  @ManyToOne(type => Producto, producto => producto.PedidoDetalles)
  Producto: Producto;

  @OneToMany(type => StockProducto, stockproducto => stockproducto.PedidoDetalle)
  StockProductos: StockProducto[];
}