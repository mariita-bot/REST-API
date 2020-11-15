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

  @OneToMany(type => Producto, producto => producto.Categoria)
  Productos: Producto[]
}