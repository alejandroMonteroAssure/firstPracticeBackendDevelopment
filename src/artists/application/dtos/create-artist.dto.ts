import { IsString, IsNotEmpty, IsOptional, IsDateString, IsUrl } from 'class-validator';

export class CreateArtistDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsUrl()
  profile_img: string;

  @IsDateString()
  @IsNotEmpty()
  debut_date: Date;
}