/*

import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IArtistRepository } from './artist.repository';
import { CreateArtistDto } from './dtos/create-artist.dto';
import { UpdateArtistDto } from './dtos/update-artist.dto';
import { IArtist } from '../domain/artist.entity';

@Injectable()
export class ArtistService {
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

*/

import { Inject, Injectable } from "@nestjs/common";
import { IAlbumRepository } from "./album.repository";
import { CreateAlbumDto } from "./dtos/create-album.dto";
import { IAlbum } from "../Domain/album.entity";

@Injectable()
export class AlbumService {
    constructor (
        @Inject(IAlbumRepository)
        private readonly albumRepository: IAlbumRepository
    ) {}
    /*
    create(createAlbumDto: CreateAlbumDto): Promise<IAlbum>;
        findAll(): Promise<IAlbum[]>;
        findById(id: number): Promise<IAlbum>;
        update(id: number, updateAlbumDto: UpdateAlbumDto): Promise<IAlbum | null>;
        remove(id: number): Promise<void>;
    */
   async create(createAlbumDto: CreateAlbumDto): Promise<IAlbum> {
    return this.albumRepository.create(createAlbumDto);
   }
}
//https://excalidraw.com/#json=xpB71Nhf8ii8pU4iM1kDK,B5OtqCB-l-mxG3PslbOowg