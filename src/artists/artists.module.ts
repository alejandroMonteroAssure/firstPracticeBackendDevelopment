import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistService } from './application/artist.service';
import { ArtistController } from './infrastructure/artist.controller';
import { ArtistTypeOrmEntity } from './infrastructure/artist.typeorm.entity';
import { IArtistRepository } from './application/artist.repository';
import { ArtistTypeOrmRepository } from './infrastructure/artist.typeorm.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ArtistTypeOrmEntity])],
  controllers: [ArtistController],
  providers: [
    ArtistService,
    {
      provide: IArtistRepository,
      useClass: ArtistTypeOrmRepository,
    },
  ],
})
export class ArtistsModule {}