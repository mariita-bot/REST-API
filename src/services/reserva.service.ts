import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reserva } from '../entities/reserva.entity';

@Injectable()
export class ReservaService {
  constructor(
    @InjectRepository(Reserva)
    private ReservaRepository: Repository<Reserva>,
  ) {}

  findAll(): Promise<Reserva[]> {
    return this.ReservaRepository.find({ where: { Activo: 1 } });
  }

  async save(Reserva: Reserva): Promise<void> {
    await this.ReservaRepository.save(Reserva);
  }

  findOne(id: number): Promise<Reserva> {
    return this.ReservaRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.ReservaRepository.delete(id);
  }
}