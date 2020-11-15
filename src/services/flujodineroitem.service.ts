import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flujodineroitem } from '../entities/flujodineroitem.entity';

@Injectable()
export class FlujodineroitemService {
  constructor(
    @InjectRepository(Flujodineroitem)
    private FlujodineroitemRepository: Repository<Flujodineroitem>,
  ) {}

  findAll(): Promise<Flujodineroitem[]> {
    return this.FlujodineroitemRepository.find();
  }

  async save(Flujodinero: Flujodineroitem): Promise<void> {
    await this.FlujodineroitemRepository.save(Flujodinero);
  }

  findOne(id: number): Promise<Flujodineroitem> {
    return this.FlujodineroitemRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.FlujodineroitemRepository.delete(id);
  }
}