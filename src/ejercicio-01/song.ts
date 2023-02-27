/**
 * Interface that defines the structure of a song.
 * @property _title Title of the song.
 * @property _duration Duration of the song in seconds.
 * @property _single Indicates if the song is a single or not.
 * @property reproductions Number of times the song has been reproduced.
 * @property genres Genres of the song.
 */
interface SongInfo {
  readonly _title: string;
  readonly _duration: number;
  readonly _single: boolean;
  reproductions: number;
  genres: string[];
}

/**
 * Class that represents a song and its properties.
 * @param _title Title of the song.
 * @param _duration Duration of the song in seconds.
 * @param _single Indicates if the song is a single or not.
 * @param _reproductions Number of times the song has been reproduced.
 * @param _genres Genres of the song.
 * @returns Song object.
 * const song = new Song("The Scientist", 234, true, 0, "Pop", "Rock");
 * console.log(song.title); // "The Scientist"
 */
export class Song implements SongInfo {
  private _genres: string[];
  constructor(
    public readonly _title: string,
    public readonly _duration: number,
    public readonly _single: boolean,
    private _reproductions: number,
    ...genres: string[]
  ) {
    this._genres = genres;
  }

  get genres(): string[] {
    return this._genres;
  }

  set genres(genres: string[]) {
    this._genres = genres;
  }

  get reproductions(): number {
    return this._reproductions;
  }

  set reproductions(reproductions: number) {
    this._reproductions = reproductions;
  }

  incrementReproductions(): void {
    ++this._reproductions;
  }

  addGenre(genre: string): void {
    this._genres.push(genre);
  }
}
