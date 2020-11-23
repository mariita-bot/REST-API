import { 
    PrimaryGeneratedColumn, 
    Column, 
    Entity,
    OneToMany
} from 'typeorm';
import { Flujodineroitem } from './flujodineroitem.entity';

@Entity()
export class Billete {
    @PrimaryGeneratedColumn()
    IdBillete: number;

    @Column()
    Nombre: string;
    
    @Column()
    Valor: number;

    @Column({type: "tinyint", default: 1})
    Activo: number;    

    @OneToMany(type => Flujodineroitem, flujodineroitem => flujodineroitem.Billete)
    Flujodineroitems: Flujodineroitem[]
}