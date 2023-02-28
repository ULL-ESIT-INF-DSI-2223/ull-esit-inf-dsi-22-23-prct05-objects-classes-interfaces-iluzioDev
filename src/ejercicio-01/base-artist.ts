import { CD } from "./cd";

/**
 * Interface for the ArtistInfo class.
 * @interface ArtistInfo
 * @property name Name of the artist/band.
 * @property discography List of CDs of the artist.
 */
export interface ArtistInfo {
  readonly name: string;
  discography: CD[];
}

/**
 * Abstract class that represents an artist (solist or band) and its properties.
 * @abstract
 * @class BaseArtist
 * @implements ArtistInfo
 * @property _monthlyListeners Number of monthly listeners of the artist/band.
 * @property _discography List of CDs of the artist/band.
 * @returns BaseArtist object.
 */
export abstract class BaseArtist implements ArtistInfo {
  protected _discography: CD[];
  constructor(
    public readonly name: string,
    protected _monthlyListeners: number,
    ...discography: CD[]
  ) {
    this._discography = discography;
  }

  /**
   * Getter for the monthly listeners of the artist/band.
   * @returns {number} Number of monthly listeners.
   * ```typescript
   * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
   * let cd = new CD("A Rush of Blood to the Head", 2002, song);
   * let artist = new Artist("Coldplay", 1000000, cd);
   * console.log(artist.monthlyListeners); // 1000000
   * ```
   * @returns Number of monthly listeners.
   */
  get monthlyListeners(): number {
    return this._monthlyListeners;
  }

  /**
   * Setter for the monthly listeners of the artist/band.
   * @param monthlyListeners Number of monthly listeners.
   * @returns {number} Number of monthly listeners.
   * ```typescript
   * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
   * let cd = new CD("A Rush of Blood to the Head", 2002, song);
   * let artist = new Artist("Coldplay", 1000000, cd);
   * artist.monthlyListeners = 2000000;
   * console.log(artist.monthlyListeners); // 2000000
   * ```
   */
  set monthlyListeners(monthlyListeners: number) {
    this._monthlyListeners = monthlyListeners;
  }

  /**
   * Getter for the discography of the artist/band.
   * @returns {CD[]} Array of CDs.
   * ```typescript
   * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
   * let cd = new CD("A Rush of Blood to the Head", 2002, song);
   * let artist = new Artist("Coldplay", 1000000, cd);
   * console.log(artist.discography); // [cd]
   * ```
   */
  get discography(): CD[] {
    return this._discography;
  }

  /**
   * Setter for the discography of the artist/band.
   * @param discography Array of CDs.
   * @returns {CD[]}
   * ```typescript
   * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
   * let cd = new CD("A Rush of Blood to the Head", 2002, song);
   * let artist = new Artist("Coldplay", 1000000, cd);
   * artist.discography = [];
   * console.log(artist.discography); // []
   * ```
   */
  set discography(discography: CD[]) {
    this._discography = discography;
  }

  /**
   * Adds a CD to the discography of the artist/band.
   * @param cd CD to add.
   * @returns {void}
   * ```typescript
   * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
   * let cd = new CD("A Rush of Blood to the Head", 2002, song);
   * let artist = new Artist("Coldplay", 1000000, cd);
   * let song2 = new Song("Yellow", 3.34, true, 10000, "Pop", "Rock");
   * let cd2 = new CD("Parachutes", 2000, song2);
   * artist.addCD(cd2);
   * console.log(artist.discography); // [cd, cd2]
   * ```
   */
  addCD(cd: CD): void {
    this._discography.push(cd);
  }
}
