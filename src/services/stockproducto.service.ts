import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StockProducto } from '../entities/stockproducto.entity';

@Injectable()
export class StockProductoService {
  constructor(
    @InjectRepository(StockProducto)
    private StockProductoRepository: Repository<StockProducto>,
  ) {}

  findAll(): Promise<StockProducto[]> {
    return this.StockProductoRepository.find();
  }

  async save(StockProducto: StockProducto): Promise<StockProducto> {
    return await this.StockProductoRepository.save(StockProducto);
  }

  findOne(id: number): Promise<StockProducto> {
    return this.StockProductoRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.StockProductoRepository.delete(id);
  }
}