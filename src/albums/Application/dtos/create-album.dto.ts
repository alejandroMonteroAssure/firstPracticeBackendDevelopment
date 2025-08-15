import { IsDateString, IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateAlbumDto{

    @IsNumber({ allowNaN: false, maxDecimalPlaces: 0 })
    artist_id: number;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsUrl()
    cover_img: string;

    @IsDateString()
    release_date?: Date;
}