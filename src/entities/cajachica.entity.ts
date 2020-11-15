import { 
    PrimaryGeneratedColumn, 
    Column, 
    Entity,
    OneToMany
} from 'typeorm';
import { Flujodinero } from './flujodinero.entity';

@Entity()
export class Cajachica {
    @PrimaryGeneratedColumn()
    IdCajachica: number;

    @Column()
    Created_at: Date;

    @Column()
    Closed_at: Date;

    @Column()
    CantidadDeApertura: number;

    @Column()
    CantidadDeCierre: number;

    @OneToMany(type => Flujodinero, flujodinero => flujodinero.Cajachica)
    Flujodineros: Flujodinero[];
}