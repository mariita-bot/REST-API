import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CoreFeatureModule } from './CoreFeatures.module';
import { AuthModule } from './auth/auth.module';
import * as ormconfig from './ormconfig';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot(ormconfig),
    CoreFeatureModule
  ]
})
export class AppModule {
  constructor(private connection: Connection) {}
}
