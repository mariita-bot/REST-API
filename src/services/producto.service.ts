import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from '../entities/producto.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private ProductosRepository: Repository<Producto>,
  ) {}

  findAll(): Promise<Producto[]> {
    return this.ProductosRepository.find({ where: { Activo: 1 } });
  }

  findWithStock(): Promise<any> {
    return this.ProductosRepository.find({ where: { Activo: 1} , relations: ["ProveeProductos","ProveeProductos.Proveedor","Categoria"]});
  }

  async save(producto: Producto): Promise<void> {
    await this.ProductosRepository.save(producto);
  }

  findOne(id: number): Promise<Producto> {
    return this.ProductosRepository.findOne(id,{relations: ["ProveeProductos","ProveeProductos.Proveedor","Categoria"]});
  }

  async findOneWithStock(id: number): Promise<any> {
    return await this.ProductosRepository.findOne(id, {relations: ["ProveeProductos"]});
  }

  async remove(id: number): Promise<void> {
    await this.ProductosRepository.delete(id);
  }
}