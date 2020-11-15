import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from '../entities/pedido.entity';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private PedidosRepository: Repository<Pedido>,
  ) {}

  findAll(): Promise<Pedido[]> {
    return this.PedidosRepository.find();
  }

  findWithDetalles(): Promise<any> {
    return this.PedidosRepository.find({relations: ['PedidoDetalles', 'PedidoDetalles.Producto']});
  }

  async save(Pedido: Pedido): Promise<Pedido> {
    return await this.PedidosRepository.save(Pedido);
  }

  findOne(id: number): Promise<Pedido> {
    return this.PedidosRepository.findOne(id);
  }

  findByMesa(nomesa: number): Promise<any> {
    return this.PedidosRepository.find(
      {
        where: { MesaNumero: nomesa},
        relations: ['PedidoDetalles']
      }
    ); 
  }

  async remove(id: number): Promise<void> {
    await this.PedidosRepository.delete(id);
  }

}