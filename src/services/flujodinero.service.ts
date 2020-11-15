import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flujodinero } from '../entities/flujodinero.entity';

@Injectable()
export class FlujodineroService {
  constructor(
    @InjectRepository(Flujodinero)
    private FlujodineroRepository: Repository<Flujodinero>,
  ) {}

  findAll(): Promise<Flujodinero[]> {
    return this.FlujodineroRepository.find();
  }

  async save(Flujodinero: Flujodinero): Promise<void> {
    await this.FlujodineroRepository.save(Flujodinero);
  }

  findOne(id: number): Promise<Flujodinero> {
    return this.FlujodineroRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.FlujodineroRepository.delete(id);
  }
}