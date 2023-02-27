import { Song } from "./song";
import { CD } from "./cd";
import { Artist } from "./artist";

interface MusicLibraryInfo {
  /*
  showMusicLibraryInfo(): void;
  searchSongByTitle(title: string): Song;
  searchCDByTitle(title: string): CD;
  searchArtistByName(name: string): Artist;

  countSongsInDisc(title: string): number;
  calculateCDDuration(title: string): number;
  calculateCDReproductions(title: string): number;
  */
}

export class MusicLibrary implements MusicLibraryInfo {
  private _artists: Artist[];

  constructor(private name: string, ...artists: Artist[]) {
    this._artists = artists;
  }

  /*
  showMusicLibraryInfo(): void {
    console.log(`Nombre de la biblioteca: ${this.name}`);
    console.log(`Artistas: ${this.artists.map(artist => artist.name).join(', ')}`);
  }

  searchSongByTitle(title: string): Song {
    let song: Song = null;
    for (let artist of this.artists) {
      for (let cd of artist.discography) {
        for (let song of cd.songs) {
          if (song.title === title) {
            return song;
          }
        }
      }
    }
    return song;
  }

  searchCDByTitle(title: string): CD {
    let cd: CD = null;
    for (let artist of this.artists) {
      for (let cd of artist.discography) {
        if (cd.title === title) {
          return cd;
        }
      }
    }
    return cd;
  }

  searchArtistByName(name: string): Artist {
    let artist: Artist = null;
    for (let artist of this.artists) {
      if (artist.name === name) {
        return artist;
      }
    }
    return artist;
  }

  countSongsInDisc(title: string): number {
    let cd: CD = this.searchCDByTitle(title);
    if (cd) {
      return cd.songs.length;
    }
    return 0;
  }

  calculateCDDuration(title: string): number {
    let cd: CD = this.searchCDByTitle(title);
    if (cd) {
      return cd.songs.reduce((acc, song) => acc + song.duration, 0);
    }
    return 0;
  }

  calculateCDReproductions(title: string): number {
    let cd: CD = this.searchCDByTitle(title);
    if (cd) {
      return cd.songs.reduce((acc, song) => acc + song.numberOfReproductions, 0);
    }
    return 0;
  }*/
}
