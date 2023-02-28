import { Song } from "./song";

/**
 * Interface representing a CD, its composed of a title, a year and a list of songs.
 * @interface CDInfo
 * @property title Title of the CD.
 * @property year Year of the CD.
 * @property songs List of songs of the CD.
 */
export interface CDInfo {
  readonly title: string;
  readonly year: number;
  songs: Song[];
}

/**
 * Class representing a CD, its composed of a title, a year and a list of songs.
 * @class CD
 * @implements CDInfo
 * @returns CD object.
 * ```typescript
 * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
 * let cd = new CD("A Rush of Blood to the Head", 2002, song);
 * console.log(cd.title); // "A Rush of Blood to the Head"
 * console.log(cd.year); // 2002
 * console.log(cd.songs); // [song]
 * ```
 */
export class CD implements CDInfo {
  private _songs: Song[];
  constructor(
    public readonly title: string,
    public readonly year: number,
    ...songs: Song[]
  ) {
    this._songs = songs;
  }

  /**
   * Getter for the songs of the CD.
   * @returns {Song[]} Array of songs.
   * ```typescript
   * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
   * let cd = new CD("A Rush of Blood to the Head", 2002, song);
   * console.log(cd.songs); // [song]
   * ```
   */
  get songs(): Song[] {
    return this._songs;
  }

  /**
   * Setter for the songs of the CD.
   * @param songs Array of songs.
   * @returns {Song[]} Array of songs.
   * ```typescript
   * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
   * let cd = new CD("A Rush of Blood to the Head", 2002, song);
   * let song2 = new Song("Clocks", 3.45, true, 20000, "Pop", "Rock");
   * cd.songs = [song2];
   * console.log(cd.songs); // [song2]
   * ```
   */
  set songs(songs: Song[]) {
    this._songs = songs;
  }

  /**
   * Adds a song to the CD.
   * @param song Song to add.
   * @returns {void}
   * ```typescript
   * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
   * let cd = new CD("A Rush of Blood to the Head", 2002, song);
   * let song2 = new Song("Clocks", 3.45, true, 20000, "Pop", "Rock");
   * cd.addSong(song2);
   * console.log(cd.songs); // [song, song2]
   * ```
   */
  addSong(song: Song): void {
    this._songs.push(song);
    return;
  }
}
