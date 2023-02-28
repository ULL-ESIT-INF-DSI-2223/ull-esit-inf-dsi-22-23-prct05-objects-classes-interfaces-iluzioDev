/**
 * Interface that defines the structure of a song.
 * @interface SongInfo
 * @property title Title of the song.
 * @property duration Duration of the song in seconds.
 * @property single Indicates if the song is a single or not.
 * @property reproductions Number of times the song has been reproduced.
 * @property genres Genres of the song.
 */
export interface SongInfo {
  readonly title: string;
  readonly duration: number;
  readonly single: boolean;
  reproductions: number;
  genres: string[];
}

/**
 * Class that represents a song and its properties.
 * @class Song
 * @implements SongInfo 
 * @param title Title of the song.
 * @param duration Duration of the song in seconds.
 * @param single Indicates if the song is a single or not.
 * @param _reproductions Number of times the song has been reproduced.
 * @param _genres Genres of the song.
 * @returns Song object.
 * ```typescript
 * const song = new Song("The Scientist", 234, true, 0, "Pop", "Rock");
 * console.log(song.title); // "The Scientist"
 * console.log(song.duration); // 234
 * console.log(song.single); // true
 * console.log(song.reproductions); // 0
 * console.log(song.genres); // ["Pop", "Rock"]
 * ```
 */
export class Song implements SongInfo {
  private _genres: string[];
  constructor(
    public readonly title: string,
    public readonly duration: number,
    public readonly single: boolean,
    private _reproductions: number,
    ...genres: string[]
  ) {
    this._genres = genres;
  }

  /**
   * Getter for the genres of the song.
   * @returns {string[]} Array of genres.
   */
  get genres(): string[] {
    return this._genres;
  }

  /**
   * Setter for the genres of the song.
   * @param genres Array of genres.
   * @returns {string[]} Array of genres.
   * ```typescript
   * song.genres = ["Pop", "Rock"];
   * console.log(song.genres); // ["Pop", "Rock"]
   * ```
   */
  set genres(genres: string[]) {
    this._genres = genres;
  }

  /**
   * Getter for the number of reproductions of the song.
   * @returns {number} Number of reproductions.
   * ```typescript
   * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
   * console.log(song.reproductions); // 10000
   * ```
   */
  get reproductions(): number {
    return this._reproductions;
  }

  /**
   * Setter for the number of reproductions of the song.
   * @param reproductions Number of reproductions.
   * @returns {number} Number of reproductions.
   * ```typescript
   * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
   * song.reproductions = 20000;
   * console.log(song.reproductions); // 20000
   * ```
   */
  set reproductions(reproductions: number) {
    this._reproductions = reproductions;
  }

  /**
   * Increments the number of reproductions of the song.
   * @returns {number} Number of reproductions.
   * ```typescript
   * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
   * song.incrementReproductions();
   * console.log(song.reproductions); // 10001
   * ```
   */
  incrementReproductions(): number {
    return ++this._reproductions;
  }

  /**
   * Adds a genre to the song.
   * @param genre Genre to add.
   * @returns {void}
   * ```typescript
   * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
   * song.addGenre("Indie");
   * console.log(song.genres); // ["Pop", "Rock", "Indie"]
   * ```
   */
  addGenre(genre: string): void {
    this._genres.push(genre);
  }
}
