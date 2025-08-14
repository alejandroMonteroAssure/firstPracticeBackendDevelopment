-- Active: 1755127822220@@127.0.0.1@5432@sbolify
create database sbolify;

create table artists(
    artist_id serial primary key,
    name varchar(255) not null,
    profile_img varchar(255),
    debut_date TIMESTAMP
);

create table albums(
    album_id serial primary key,
    artist_id int not null,
    title varchar(255) not  null,
    cover_img varchar(255) not null,
    release_date TIMESTAMP default now(),
    constraint fk_albums_artist foreign key (artist_id) references artists(artist_id) on delete cascade
);

create table songs(
    song_id serial primary key,
    album_id int not null,
    title varchar(255) not null,
    cover_img varchar(255) not null,
    lyrics varchar(1000),
    release_date TIMESTAMP default now(),
    duration TIME not null,
    constraint fk_songs_album FOREIGN KEY (album_id) references albums(album_id) on delete cascade
);

create table genres(
    genre_id serial primary key,
    name varchar(255) not null,
    description varchar(255) not null
);

create table songgenres(
    song_id int not null,
    genre_id int not null,
    PRIMARY KEY (song_id, genre_id),
    constraint fk_songgenres_song FOREIGN key (song_id) REFERENCES songs(song_id) on delete CASCADE,
    constraint fk_songgenres_genre FOREIGN KEY (genre_id) references genres(genre_id) on delete CASCADE
);

alter table artists alter COLUMN profile_img type VARCHAR(500);
alter table albums alter COLUMN cover_img type VARCHAR(500);
alter table songs alter COLUMN cover_img type VARCHAR(500);

insert into artists (name, profile_img, debut_date) values
('Deftones', 'https://images.coolwallpapers.me/picsup/1160982-deftones.jpg', '1988-01-01'),
('My Chemical Romance', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/My_Chemical_Romance_logo_%282022%29.svg/250px-My_Chemical_Romance_logo_%282022%29.svg.png', '2001-01-01'),
('Blink-182', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Blink-182_Logo_2022.png/250px-Blink-182_Logo_2022.png', '1992-01-01'),
('Linkin Park', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Linkin_Park_wordmark_2024.svg/250px-Linkin_Park_wordmark_2024.svg.png', '1996-01-01'),
('Paramore', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Paramore_2023.jpg/330px-Paramore_2023.jpg', '2004-01-01'),
('Green Day', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Green_Day_Saviors.png/250px-Green_Day_Saviors.png', '1986-01-01'),
('Evanescence', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Evanescence_wordmark.svg/250px-Evanescence_wordmark.svg.png', '1995-01-01'),
('Fall Out Boy', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Fall_Out_Boy%2C_Heaven%2C_London_%2852755936394%29.jpg/330px-Fall_Out_Boy%2C_Heaven%2C_London_%2852755936394%29.jpg', '2001-01-01'),
('Nine Inch Nails', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Nine_Inch_Nails_-_20.06.2022_-_O2_Apollo_Manchester.jpg/330px-Nine_Inch_Nails_-_20.06.2022_-_O2_Apollo_Manchester.jpg', '1988-01-01'),
('Red Hot Chili Peppers', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/RHCP_Live_in_London_26_June_2022.jpg/330px-RHCP_Live_in_London_26_June_2022.jpg', '1983-01-01');

insert into albums (artist_id, title, cover_img, release_date) values
(1, 'Adrenaline', 'https://example.com/deftones_album.jpg', '1995-10-03'),
(2, 'The Black Parade', 'https://example.com/mcr_album.jpg', '2006-10-24'),
(3, 'Enema of the State', 'https://example.com/blink182_album.jpg', '1999-06-01'),
(4, 'Hybrid Theory', 'https://example.com/linkinpark_album.jpg', '2000-10-24'),
(5, 'Riot!', 'https://example.com/paramore_album.jpg', '2007-06-12'),
(6, 'Dookie', 'https://example.com/greenday_album.jpg', '1994-02-01'),
(7, 'Fallen', 'https://example.com/evanescence_album.jpg', '2003-03-04'),
(8, 'From Under the Cork Tree', 'https://example.com/falloutboy_album.jpg', '2005-05-03'),
(9, 'The Downward Spiral', 'https://example.com/nin_album.jpg', '1994-03-08'),
(10, 'Blood Sugar Sex Magik', 'https://example.com/rhcp_album.jpg', '1991-09-24');

insert into songs (album_id, title, cover_img, lyrics, release_date, duration) values
(1, '7 Words', 'https://example.com/deftones_song1.jpg', 'Lyrics of 7 Words...', '1995-10-03', '00:03:57'),
(1, 'Bored', 'https://example.com/deftones_song2.jpg', 'Lyrics of Bored...', '1995-10-03', '00:04:03'),
(2, 'Welcome to the Black Parade', 'https://example.com/mcr_song1.jpg', 'Lyrics of Welcome...', '2006-10-24', '00:05:11'),
(2, 'I Dontt Love You', 'https://example.com/mcr_song2.jpg', 'Lyrics of I Dont Love You...', '2006-10-24', '00:03:59'),
(3, 'All the Small Things', 'https://example.com/blink_song1.jpg', 'Lyrics of All the Small Things...', '1999-06-01', '00:02:48'),
(3, 'Adams Song', 'https://example.com/blink_song2.jpg', 'Lyrics of Adams Song...', '1999-06-01', '00:04:00'),
(4, 'In the End', 'https://example.com/linkinpark_song1.jpg', 'Lyrics of In the End...', '2000-10-24', '00:03:36'),
(4, 'Crawling', 'https://example.com/linkinpark_song2.jpg', 'Lyrics of Crawling...', '2000-10-24', '00:03:29'),
(5, 'Misery Business', 'https://example.com/paramore_song1.jpg', 'Lyrics of Misery Business...', '2007-06-12', '00:03:36'),
(5, 'For a Pessimist, Im Pretty Optimistic', 'https://example.com/paramore_song2.jpg', 'Lyrics of For a Pessimist...', '2007-06-12', '00:03:25'),
(6, 'Basket Case', 'https://example.com/greenday_song1.jpg', 'Lyrics of Basket Case...', '1994-02-01', '00:03:01'),
(6, 'When I Come Around', 'https://example.com/greenday_song2.jpg', 'Lyrics of When I Come Around...', '1994-02-01', '00:02:58'),
(7, 'Bring Me to Life', 'https://example.com/evanescence_song1.jpg', 'Lyrics of Bring Me to Life...', '2003-03-04', '00:03:56'),
(7, 'My Immortal', 'https://example.com/evanescence_song2.jpg', 'Lyrics of My Immortal...', '2003-03-04', '00:04:32'),
(8, 'Sugar, We are Goin Down', 'https://example.com/falloutboy_song1.jpg', 'Lyrics of Sugar, We are Goin Down...', '2005-05-03', '00:03:49'),
(8, 'Dance, Dance', 'https://example.com/falloutboy_song2.jpg', 'Lyrics of Dance, Dance...', '2005-05-03', '00:03:00'),
(9, 'Closer', 'https://example.com/nin_song1.jpg', 'Lyrics of Closer...', '1994-03-08', '00:06:13'),
(9, 'Hurt', 'https://example.com/nin_song2.jpg', 'Lyrics of Hurt...', '1994-03-08', '00:06:13'),
(10, 'Under the Bridge', 'https://example.com/rhcp_song1.jpg', 'Lyrics of Under the Bridge...', '1991-09-24', '00:04:24'),
(10, 'Give It Away', 'https://example.com/rhcp_song2.jpg', 'Lyrics of Give It Away...', '1991-09-24', '00:04:43');

insert into genres (name, description) values
('Alternative Rock', 'Rock music that emerged from the independent music underground.'),
('Emo', 'Emotional rock music, often confessional or expressive.'),
('Punk Rock', 'Fast, hard-edged music with short songs and political lyrics.'),
('Nu Metal', 'Fusion of metal with other genres like hip hop and grunge.'),
('Pop Rock', 'A mix of pop music and rock elements.'),
('Hard Rock', 'Aggressive rock music with heavy guitars.'),
('Indie Rock', 'Independent rock music, often experimental or artistic.'),
('Gothic Rock', 'Dark rock music with melancholic tones.'),
('Rap Rock', 'Fusion of rap and rock music.'),
('Funk Rock', 'Fusion of funk rhythms and rock music.');


insert into genres (name, description) values
('Alternative Rock', 'Rock music that emerged from the independent music underground.'),
('Emo', 'Emotional rock music, often confessional or expressive.'),
('Punk Rock', 'Fast, hard-edged music with short songs and political lyrics.'),
('Nu Metal', 'Fusion of metal with other genres like hip hop and grunge.'),
('Pop Rock', 'A mix of pop music and rock elements.'),
('Hard Rock', 'Aggressive rock music with heavy guitars.'),
('Indie Rock', 'Independent rock music, often experimental or artistic.'),
('Gothic Rock', 'Dark rock music with melancholic tones.'),
('Rap Rock', 'Fusion of rap and rock music.'),
('Funk Rock', 'Fusion of funk rhythms and rock music.');

insert into songgenres (song_id, genre_id) values
(1, 1), (1, 4), (2, 1),(2, 4),
(3, 2), (3, 1), (4, 2),(4, 1),
(5, 3), (5, 5), (6, 3), (6, 5),
(7, 4), (7, 9), (8, 4), (8, 9),
(9, 2), (9, 5), (10, 2), (10, 5),
(11, 3), (11, 5), (12, 3), (12, 5),
(13, 2), (13, 8), (14, 2), (14, 8),
(15, 2), (15, 5), (16, 2), (16, 5),
(17, 6), (17, 8), (18, 6), (18, 8),
(19, 5), (19, 10), (20, 5), (20, 10);

alter table songs add COLUMN mp3_link varchar(500);

DO $$
DECLARE
    r record;
BEGIN
    FOR r IN SELECT song_id FROM songs LOOP
        UPDATE songs
        SET mp3_link = 'https://example.com/song' || r.song_id || '.mp3'
        WHERE song_id = r.song_id;
    END LOOP;
END $$ LANGUAGE plpgsql;


