import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    ManyToOne
} from 'typeorm';
import { Cliente } from './cliente.entity';
import { Mesa } from './mesa.entity';

@Entity()
export class Reserva {
    @PrimaryGeneratedColumn()
    IdReserva: number;

    @Column()
    Fecha: Date;

    @ManyToOne(type => Cliente, cliente => cliente.Reservas)
    Cliente: Cliente;

    @ManyToOne(type => Mesa, mesa => mesa.Reservas)
    Mesa: Mesa;
}