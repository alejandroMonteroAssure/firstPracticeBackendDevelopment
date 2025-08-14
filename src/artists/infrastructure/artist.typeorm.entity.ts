import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('artists')
export class ArtistTypeOrmEntity {
  @PrimaryGeneratedColumn()
  artist_id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  profile_img: string;

  @Column({ type: 'timestamp', nullable: true })
  debut_date: Date;
}