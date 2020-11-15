import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cajachica } from '../entities/cajachica.entity';

@Injectable()
export class CajachicaService {
  constructor(
    @InjectRepository(Cajachica)
    private CajachicaRepository: Repository<Cajachica>,
  ) {}

  findAll(): Promise<Cajachica[]> {
    return this.CajachicaRepository.find();
  }

  async save(Cajachica: Cajachica): Promise<void> {
    await this.CajachicaRepository.save(Cajachica);
  }

  findOne(id: number): Promise<Cajachica> {
    return this.CajachicaRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.CajachicaRepository.delete(id);
  }
}