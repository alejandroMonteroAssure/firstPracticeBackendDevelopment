import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IArtistRepository } from '../domain/artist.repository';
import { Artist } from '../domain/artist.entity';
import { ArtistTypeOrmEntity } from './artist.typeorm.entity';
import { CreateArtistDto } from '../application/dtos/create-artist.dto';
import { UpdateArtistDto } from '../application/dtos/update-artist.dto';

@Injectable()
export class ArtistTypeOrmRepository implements IArtistRepository {
  constructor(
    @InjectRepository(ArtistTypeOrmEntity)
    private readonly ormRepository: Repository<ArtistTypeOrmEntity>,
  ) {}

  async create(createArtistDto: CreateArtistDto): Promise<Artist> {
    const artistEntity = this.ormRepository.create(createArtistDto);
    return await this.ormRepository.save(artistEntity);
  }

  async findAll(): Promise<Artist[]> {
    return await this.ormRepository.find();
  }

  async findById(id: number): Promise<Artist | null> {
    return await this.ormRepository.findOneBy({ artist_id: id });
  }

  async update(id: number, updateArtistDto: UpdateArtistDto): Promise<Artist | null> {
    const artistEntity = await this.ormRepository.findOneBy({ artist_id: id });
    if (!artistEntity) {
      return null;
    }
    // JSON Merge Patch: mezcla el objeto existente con los campos del DTO
    Object.assign(artistEntity, updateArtistDto);
    const updatedEntity = await this.ormRepository.save(artistEntity);
    return updatedEntity as Artist;
  }

  async remove(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }
}