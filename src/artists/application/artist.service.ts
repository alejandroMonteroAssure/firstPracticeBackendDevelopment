import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IArtistRepository } from './artist.repository';
import { CreateArtistDto } from './dtos/create-artist.dto';
import { UpdateArtistDto } from './dtos/update-artist.dto';
import { IArtist } from '../domain/artist.entity';

@Injectable()
export class ArtistService {
  // Inyectamos el REPOSITORIO usando el token (el PUERTO)
  constructor(
    @Inject(IArtistRepository)
    private readonly artistRepository: IArtistRepository,
  ) {}

  async create(createArtistDto: CreateArtistDto): Promise<IArtist> {
    return this.artistRepository.create(createArtistDto);
  }

  async findAll(): Promise<IArtist[]> {
    return this.artistRepository.findAll();
  }

  async findOne(id: number): Promise<IArtist> {
    const artist = await this.artistRepository.findById(id);
    if (!artist) {
      throw new NotFoundException(`Artist with ID #${id} not found`);
    }
    return artist;
  }

  async update(id: number, updateArtistDto: UpdateArtistDto): Promise<IArtist> {
    const artist = await this.artistRepository.update(id, updateArtistDto);
    if (!artist) {
      throw new NotFoundException(`Artist with ID #${id} not found`);
    }
    return artist;
  }

  async remove(id: number): Promise<void> {
    // Primero, verificamos que el artista exista
    await this.findOne(id);
    await this.artistRepository.remove(id);
  }
}