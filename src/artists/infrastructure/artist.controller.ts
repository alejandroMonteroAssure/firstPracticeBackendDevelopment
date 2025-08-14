import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { ArtistService } from '../application/artist.service';
import { CreateArtistDto } from '../application/dtos/create-artist.dto';
import { UpdateArtistDto } from '../application/dtos/update-artist.dto';

@Controller('v1/artists') // Usando versionado en la URI
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED) // 201 Created
  create(@Body() createArtistDto: CreateArtistDto) {
    return this.artistService.create(createArtistDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK) // 200 OK
  findAll() {
    return this.artistService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK) // 200 OK
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.artistService.findOne(id);
  }

  // PUT reemplaza completamente el recurso
  @Put(':id')
  @HttpCode(HttpStatus.OK) // 200 OK
  updateAll(
    @Param('id', ParseIntPipe) id: number,
    @Body() createArtistDto: CreateArtistDto, // Usa el DTO de creación para forzar todos los campos
  ) {
    return this.artistService.update(id, createArtistDto);
  }
  
  // PATCH actualiza parcialmente el recurso
  @Patch(':id')
  @HttpCode(HttpStatus.OK) // 200 OK
  updatePartial(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateArtistDto: UpdateArtistDto,
  ) {
    return this.artistService.update(id, updateArtistDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // 204 No Content
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.artistService.remove(id);
  }
}