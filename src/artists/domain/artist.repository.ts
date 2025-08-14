import { Artist } from './artist.entity';
import { CreateArtistDto } from '../application/dtos/create-artist.dto';
import { UpdateArtistDto } from '../application/dtos/update-artist.dto';

export const IArtistRepository = Symbol('IArtistRepository');

export interface IArtistRepository {
  create(createArtistDto: CreateArtistDto): Promise<Artist>;
  findAll(): Promise<Artist[]>;
  findById(id: number): Promise<Artist | null>;
  update(id: number, updateArtistDto: UpdateArtistDto): Promise<Artist | null>;
  remove(id: number): Promise<void>;
}