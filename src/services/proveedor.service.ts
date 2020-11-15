import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proveedor } from '../entities/proveedor.entity';

@Injectable()
export class ProveedoresService {
  constructor(
    @InjectRepository(Proveedor)
    private ProveedoresRepository: Repository<Proveedor>,
  ) {}

  findAll(): Promise<Proveedor[]> {
    return this.ProveedoresRepository.find();
  }

  async save(Proveedor: Proveedor): Promise<void> {
    await this.ProveedoresRepository.save(Proveedor);
  }

  findOne(id: number): Promise<Proveedor> {
    return this.ProveedoresRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.ProveedoresRepository.delete(id);
  }
}