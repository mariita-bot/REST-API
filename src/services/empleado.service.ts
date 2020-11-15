import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empleado } from '../entities/empleado.entity';

@Injectable()
export class EmpleadosService {
  constructor(
    @InjectRepository(Empleado)
    private empleadosRepository: Repository<Empleado>,
  ) {}

  findAll(): Promise<Empleado[]> {
    return this.empleadosRepository.find();
  }

  async save(empleado: Empleado): Promise<void> {
    await this.empleadosRepository.save(empleado);
  }

  findOne(username: string): Promise<Empleado | undefined> {
    return this.empleadosRepository.findOne(
      { 
        where: { 
          Nombre_usuario: username
        }
      }
    );
  }

  async remove(id: number): Promise<void> {
    await this.empleadosRepository.delete(id);
  }
}