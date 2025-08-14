import { IArtist } from '../domain/artist.entity';
import { CreateArtistDto } from './dtos/create-artist.dto';
import { UpdateArtistDto } from './dtos/update-artist.dto';

export const IArtistRepository = Symbol('IArtistRepository');
export interface IArtistRepository {
  create(createArtistDto: CreateArtistDto): Promise<IArtist>;
  findAll(): Promise<IArtist[]>;
  findById(id: number): Promise<IArtist | null>;
  update(id: number, updateArtistDto: UpdateArtistDto): Promise<IArtist | null>;
  remove(id: number): Promise<void>;
}
