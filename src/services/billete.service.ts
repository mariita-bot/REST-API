import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Billete } from '../entities/billete.entity';

@Injectable()
export class BilleteService {
  constructor(
    @InjectRepository(Billete)
    private BilleteRepository: Repository<Billete>,
  ) {}

  findAll(): Promise<Billete[]> {
    return this.BilleteRepository.find();
  }

  async save(Billete: Billete): Promise<void> {
    await this.BilleteRepository.save(Billete);
  }

  findOne(id: number): Promise<Billete> {
    return this.BilleteRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.BilleteRepository.delete(id);
  }
}