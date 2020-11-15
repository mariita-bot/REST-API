import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cargo } from '../entities/cargo.entity';

@Injectable()
export class CargoService {
  constructor(
    @InjectRepository(Cargo)
    private CargoRepository: Repository<Cargo>,
  ) {}

  findAll(): Promise<Cargo[]> {
    return this.CargoRepository.find();
  }

  async save(Cargo: Cargo): Promise<void> {
    await this.CargoRepository.save(Cargo);
  }

  findOne(id: number): Promise<Cargo> {
    return this.CargoRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.CargoRepository.delete(id);
  }
}