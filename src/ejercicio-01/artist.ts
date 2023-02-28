import { CD } from "./cd";
import { BaseArtist } from "./base-artist";

/**
 * Class representing an artist (solist).
 * @class Artist
 * @extends BaseArtist
 * @returns Artist object.
 * ```typescript
 * let song = new Song("Bad", 3.34, true, 10000, "Pop", "Rock");
 * let cd = new CD("Thriller", 1982, song);
 * let artist = new Artist("Michael Jackson", 1000000, cd);
 * console.log(artist.name); // Michael Jackson
 * console.log(artist.monthlyListeners); // 1000000
 * console.log(artist.discography); // [cd]
 * ```
 */
export class Artist extends BaseArtist {
  constructor(name: string, monthlyListeners: number, ...discography: CD[]) {
    super(name, monthlyListeners, ...discography);
  }
}
