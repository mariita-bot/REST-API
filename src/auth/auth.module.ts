import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { EmpleadosService } from '../services/empleado.service';

import { LocalStrategy } from './local.strategy';
import { AppController } from '../controllers/app.controller';
import { Empleado } from '../entities/empleado.entity'
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Empleado]), 
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' }
    })
  ],
  providers: [
    AuthService, 
    EmpleadosService, 
    LocalStrategy,
    JwtStrategy
  ],
  controllers: [AppController]
})
export class AuthModule {}