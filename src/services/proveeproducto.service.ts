import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProveeProducto } from '../entities/ProveeProducto.entity';

@Injectable()
export class ProveeProductoService {
  constructor(
    @InjectRepository(ProveeProducto)
    private ProveeProductoRepository: Repository<ProveeProducto>,
  ) {}

  findAll(): Promise<any[]> {
    return this.ProveeProductoRepository.find({ relations: ["Proveedor", "Producto"]});
  }

  findAllAndProducto(): Promise<any[]> {
    return this.ProveeProductoRepository.find({relations: ["Producto"]});
  }

  async save(ProveeProducto: ProveeProducto): Promise<ProveeProducto> {
    return await this.ProveeProductoRepository.save(ProveeProducto);
  }

  findOne(id: number): Promise<ProveeProducto> {
    return this.ProveeProductoRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.ProveeProductoRepository.delete(id);
  }
}