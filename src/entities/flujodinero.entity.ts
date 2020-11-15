import { 
    PrimaryGeneratedColumn, 
    Column, 
    Entity,
    ManyToOne,
    OneToMany
} from 'typeorm';
import { Cajachica } from './cajachica.entity';
import { Pedido } from './pedido.entity';
import { Flujodineroitem } from './flujodineroitem.entity';

@Entity()
export class Flujodinero {
    @PrimaryGeneratedColumn()
    IdFlujodinero: number;

    @Column({nullable: true})
    Created_at: Date;

    @Column()
    Usuario_Nombre: string;

    @Column({type: "float"})
    Ingreso_cordoba: number;

    @Column({type: "float"})
    Egreso_cordoba: number;

    @Column({type: "float"})
    Saldo: number;

    @Column()
    Observaciones: string

    @OneToMany(type => Pedido, pedido => pedido.Flujodinero)
    Pedidos: Pedido[];

    @OneToMany(type => Flujodineroitem, flujodineroitem => flujodineroitem.Flujodinero)
    Flujodineroitems: Flujodineroitem[]

    @ManyToOne(type => Cajachica, cajachica => cajachica.Flujodineros)
    Cajachica: Cajachica;
}