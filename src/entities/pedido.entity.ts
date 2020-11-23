import { 
    PrimaryGeneratedColumn, 
    Column, 
    Entity, 
    OneToMany, 
    ManyToOne
} from 'typeorm';
import { PedidoDetalle } from './pedidodetalle.entity';
import { Cliente } from './cliente.entity';
import { Empleado } from './empleado.entity';
import { Flujodinero } from './flujodinero.entity';

@Entity()
export class Pedido {
    @PrimaryGeneratedColumn()
    IdPedido: number;

    @Column("tinyint")
    Estado: number;

    @Column()
    MesaNumero: number;

    @Column()
    Observacion: string;

    @Column({type: "tinyint", default: 1})
    Activo: number;

    @OneToMany(type => PedidoDetalle, pedidoDetalle => pedidoDetalle.Pedido, { cascade: true, persistence: false})
    PedidoDetalles: PedidoDetalle[];

    @ManyToOne(type => Cliente, cliente => cliente.Pedidos)
    Cliente: Cliente;

    @ManyToOne(type => Empleado, empleado => empleado.Pedidos)
    Empleado: Empleado;

    @ManyToOne(type => Flujodinero, flujodinero => flujodinero.Pedidos)
    Flujodinero: Flujodinero;
}