import { Module } from '@nestjs/common';
import { EmpleadosService } from './services/empleado.service';

@Module({
  providers: [EmpleadosService],
  exports: [EmpleadosService],
})
export class UsersModule {}