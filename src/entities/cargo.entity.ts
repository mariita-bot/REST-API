import { 
    PrimaryGeneratedColumn, 
    Column, 
    Entity,
    OneToMany
} from 'typeorm';
import { Empleado } from './empleado.entity';

@Entity()
export class Cargo {
    @PrimaryGeneratedColumn()
    IdCargo: number;

    @Column()
    NombreCargo: string;

    @Column({type: "tinyint", default: 1})
    Activo: number;

    @OneToMany(type => Empleado, empleado => empleado.Cargo)
    Empleados: Empleado[];
}