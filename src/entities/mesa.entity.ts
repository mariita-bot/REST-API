import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  OneToMany
} from 'typeorm';
import { Reserva } from './reserva.entity';

@Entity()
export class Mesa {

  @PrimaryGeneratedColumn()
  IdMesa: number;

  @Column("int")
  Numero: number;

  @Column("tinyint")
  Estado: number;

  @Column()
  Descripcion: string;

  @OneToMany(type => Reserva, reserva => reserva.Mesa)
  Reservas: Reserva[];
}