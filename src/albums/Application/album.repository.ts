/*

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

*/

import { IAlbum } from "../Domain/album.entity";
import { CreateAlbumDto } from "./dtos/create-album.dto";
import { UpdateAlbumDto } from "./dtos/update-album.dto";

export const IAlbumRepository = Symbol('IAlbumRepository');
export interface IAlbumRepository {
    create(createAlbumDto: CreateAlbumDto): Promise<IAlbum>;
    findAll(): Promise<IAlbum[]>;
    findById(id: number): Promise<IAlbum>;
    update(id: number, updateAlbumDto: UpdateAlbumDto): Promise<IAlbum | null>;
    remove(id: number): Promise<void>;
    /*
    create album
    delete album
    add song to album
    delete song from album
    find an album by id
    find all the albums
    find a song inside an album
    creo que dejare estos de lado por ahora, no me imagino las relaciones entre endpints

para findAllByArtists seria tipo /v1/artists/1/albums y no /albums/artists/1

para add song to album seria POST o PUT /album/1/songs

para remove song from album seria DELETE /album/1/songs
para findSong in album seria GET album/1/songs

pero todavia no tengo songs y no se como hacer relaciones entre endpoints

findAllByArtist(artist_id: number): Promise<IAlbum[]>;

  // Agregar una canción al álbum (podrías definir otra interfaz para canciones si quieres)
  addSongToAlbum(album_id: number, song_id: number): Promise<void>;

  // Eliminar una canción del álbum
  removeSongFromAlbum(album_id: number, song_id: number): Promise<void>;

  // Buscar una canción dentro de un álbum
  findSongInAlbum(album_id: number, song_id: number): Promise<number | null>;
    */
}
