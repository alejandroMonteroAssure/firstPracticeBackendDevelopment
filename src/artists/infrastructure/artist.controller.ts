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

@Controller('v1/artists')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createArtistDto: CreateArtistDto) {
    return this.artistService.create(createArtistDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.artistService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.artistService.findOne(id);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  updateAll(
    @Param('id', ParseIntPipe) id: number,
    @Body() createArtistDto: CreateArtistDto,
  ) {
    return this.artistService.update(id, createArtistDto);
  }
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  updatePartial(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateArtistDto: UpdateArtistDto,
  ) {
    return this.artistService.update(id, updateArtistDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.artistService.remove(id);
  }
}