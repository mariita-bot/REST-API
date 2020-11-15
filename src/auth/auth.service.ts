import { Injectable } from '@nestjs/common';
import { EmpleadosService } from '../services/empleado.service';
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
      private empleadosService: EmpleadosService,
      private jwtService: JwtService
    ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.empleadosService.findOne(username);
    if (user && user.Contrasenia === pass) {
      const { Contrasenia, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.Nombre_usuario, sub: user.IdEmpleado };
    return {
        access_token: this.jwtService.sign(payload)
    };
  }
}
