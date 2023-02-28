import { CD } from "./cd";
import { BaseArtist } from "./base-artist";

/**
 * Class representing a band.
 * @class Band
 * @extends BaseArtist
 * @param name Name of the band.
 * @param monthlyListeners Number of monthly listeners of the band.
 * @param discography List of CDs of the band.
 * @returns Band object.
 * ```typescript
 * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
 * let cd = new CD("A Rush of Blood to the Head", 2002, song);
 * let band = new Band("Coldplay", 1000000, cd);
 * console.log(band.name); // Coldplay
 * console.log(band.monthlyListeners); // 1000000
 * console.log(band.discography); // [cd]
 * ```
 */
export class Band extends BaseArtist {
  constructor(name: string, monthlyListeners: number, ...discography: CD[]) {
    super(name, monthlyListeners, ...discography);
  }
}
