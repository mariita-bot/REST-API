import { 
    PrimaryGeneratedColumn, 
    Column, 
    Entity,
    OneToMany,
    ManyToOne
} from 'typeorm';
import { Pedido } from './pedido.entity';
import { Cargo } from './cargo.entity';

@Entity()
export class Empleado {
    @PrimaryGeneratedColumn()
    IdEmpleado: number;

    @Column()
    NombreEmpleado: string;

    @Column()
    Direccion: string;

    @Column()
    Cedula: string;

    @Column("tinyint")
    Sexo: number;

    @Column("tinyint")
    Estado: number;

    @Column({nullable: true})
    Nombre_usuario: string

    @Column({nullable: true})
    Contrasenia: string

    @OneToMany(type => Pedido, pedido => pedido.Empleado)
    Pedidos: Pedido[];

    @ManyToOne(type => Cargo, cargo => cargo.Empleados)
    Cargo: Cargo;
}