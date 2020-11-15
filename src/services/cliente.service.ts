import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from '../entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private ClienteRepository: Repository<Cliente>,
  ) {}

  findAll(): Promise<Cliente[]> {
    return this.ClienteRepository.find();
  }

  async save(Cliente: Cliente): Promise<void> {
    await this.ClienteRepository.save(Cliente);
  }

  findOne(id: number): Promise<Cliente> {
    return this.ClienteRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.ClienteRepository.delete(id);
  }
}