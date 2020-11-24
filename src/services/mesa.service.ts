import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mesa } from '../entities/mesa.entity';

@Injectable()
export class MesasService {
  constructor(
    @InjectRepository(Mesa)
    private MesasRepository: Repository<Mesa>,
  ) {}

  findAll(): Promise<Mesa[]> {
    return this.MesasRepository.find({ where: { Activo: 1 } });
  }

  findDisponibles() : Promise<Mesa[]> {
    return this.MesasRepository.find({ where: { Activo : 1 , Estado : 1} })
  }

  async save(mesa: Mesa): Promise<void> {
    await this.MesasRepository.save(mesa);
  }

  findOne(id: number): Promise<Mesa> {
    return this.MesasRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.MesasRepository.delete(id);
  }
}