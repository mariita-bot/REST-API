import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    OneToMany
} from 'typeorm';
import { ProveeProducto } from './proveeproducto.entity';

@Entity()
export class Proveedor {
    @PrimaryGeneratedColumn()
    IdProveedor: number;

    @Column()
    NombreProveedor: string;

    @Column()
    Direccion: string;

    @Column()
    Telefono: string;

    @Column({type: "tinyint", default: 1})
    Activo: number;

    @OneToMany(type => ProveeProducto, proveeProducto => proveeProducto.Proveedor)
    ProveeProductos: ProveeProducto[];
}