import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  OneToMany
} from 'typeorm';

import { Pedido } from './pedido.entity';
import { Reserva } from './reserva.entity';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  IdCliente: number;

  @Column()
  NombreCliente: string;

  @Column({nullable: true})
  Telefono: string;

  @Column({nullable: true})
  Cedula: string;

  @Column({type: "tinyint", default: 1})
  Activo: number;

  @OneToMany(type => Pedido, pedido => pedido.Cliente)
  Pedidos: Pedido[];

  @OneToMany(type => Reserva, reserva => reserva.Cliente)
  Reservas: Reserva[];
}