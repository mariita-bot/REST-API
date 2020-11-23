import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PedidoDetalle } from '../entities/PedidoDetalle.entity';

@Injectable()
export class PedidoDetalleService {
  constructor(
    @InjectRepository(PedidoDetalle)
    private PedidoDetalleRepository: Repository<PedidoDetalle>,
  ) {}

  findAll(): Promise<PedidoDetalle[]> {
    return this.PedidoDetalleRepository.find({ where: { Activo: 1 } });
  }

  async save(PedidoDetalle: PedidoDetalle): Promise<PedidoDetalle> {
    return this.PedidoDetalleRepository.save(PedidoDetalle);
  }

  findOne(id: number): Promise<PedidoDetalle> {
    return this.PedidoDetalleRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.PedidoDetalleRepository.delete(id);
  }
}