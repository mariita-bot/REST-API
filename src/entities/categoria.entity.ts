import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  OneToMany
} from 'typeorm';
import { Producto } from './producto.entity';

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  IdCategoria: number;

  @Column()
  NombreCategoria: string;

  @Column({type: "tinyint", default: 1})
  Activo: number;

  @OneToMany(type => Producto, producto => producto.Categoria)
  Productos: Producto[]
}