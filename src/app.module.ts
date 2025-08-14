// src/app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistsModule } from './artists/artists.module'; // 👈 PASO 1: Importa el módulo

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'mysecretpassword',
      database: 'sbolify',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ArtistsModule, // 👈 PASO 2: Añádelo aquí al array de imports
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }