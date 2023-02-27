import { Song } from "./song";

interface CDInfo {
  _title: string;
  _year: number;
  songs: Song[];
}

export class CD implements CDInfo {
  private _songs: Song[];
  constructor(
    public readonly _title: string,
    public readonly _year: number,
    ... songs: Song[]
  ) {
    this._songs = songs;
  }

  get songs(): Song[] {
    return this._songs;
  }

  set songs(songs: Song[]) {
    this._songs = songs;
  }

  addSong(song: Song): void {
    this._songs.push(song);
    return;
  }
}
