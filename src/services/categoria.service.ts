import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from '../entities/categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private CategoriaRepository: Repository<Categoria>,
  ) {}

  findAll(): Promise<Categoria[]> {
    return this.CategoriaRepository.find();
  }

  async save(Categoria: Categoria): Promise<void> {
    await this.CategoriaRepository.save(Categoria);
  }

  findOne(id: number): Promise<Categoria> {
    return this.CategoriaRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.CategoriaRepository.delete(id);
  }
}