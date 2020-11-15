import { 
    PrimaryGeneratedColumn, 
    Column, 
    Entity,
    ManyToOne,
    OneToMany
} from 'typeorm';
import { Flujodinero } from './flujodinero.entity';
import { Billete } from './billete.entity';

@Entity()
export class Flujodineroitem {
    @PrimaryGeneratedColumn()
    IdFlujodineroitem: number;

    @Column()
    Cantidad: number;

    @Column()
    Denominacion: number;

    @ManyToOne(type => Flujodinero, flujodinero => flujodinero.Flujodineroitems)
    Flujodinero: Flujodinero;

    @ManyToOne(type => Billete, billete => billete.Flujodineroitems)
    Billete: Billete;
}