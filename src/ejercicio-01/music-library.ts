import { Song } from "./song";
import { CD } from "./cd";
import { BaseArtist } from "./base-artist";

/**
 * Interface of the MusicLibrary class.
 * @interface MusicLibraryInfo
 * @property {string} showInfo() - Shows the name of the library and the artists.
 * @property {Song | false} searchSong(title: string) - Searches a song by title.
 * @property {CD | false} searchCD(title: string) - Searches a CD by title.
 * @property {BaseArtist | false} searchArtist(name: string) - Searches an artist by name.
 * @property {number} countSongsInDisc(title: string) - Counts the songs in a CD.
 * @property {number} calculateCDDuration(title: string) - Calculates the duration of a CD.
 * @property {number} calculateCDReproductions(title: string) - Calculates the reproductions of a CD.
 */
export interface MusicLibraryInfo {
  showInfo(): string;
  searchSong(title: string): Song | false;
  searchCD(title: string): CD | false;
  searchArtist(name: string): BaseArtist | false;

  countSongsInDisc(title: string): number;
  calculateCDDuration(title: string): number;
  calculateCDReproductions(title: string): number;
}

/**
 * Class that represents a music library.
 * @class MusicLibrary
 * @implements MusicLibraryInfo
 * @property _name - Name of the library.
 * @property _artists - Artists of the library.
 * @returns {MusicLibrary} MusicLibrary object.
 * ```typescript
 * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
 * let cd = new CD("A Rush of Blood to the Head", 2002, song);
 * let artist = new Artist("Coldplay", 1000000, cd);
 * let library = new MusicLibrary("My library", artist);
 * ```
 */
export class MusicLibrary implements MusicLibraryInfo {
  private _artists: BaseArtist[];
  constructor(private _name: string, ...artists: BaseArtist[]) {
    this._artists = artists;
  }

  /**
   * Getter for the name of the library.
   * @returns {string} Name of the library.
   * ```typescript
   * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
   * let cd = new CD("A Rush of Blood to the Head", 2002, song);
   * let artist = new Artist("Coldplay", 1000000, cd);
   * let library = new MusicLibrary("My library", artist);
   * console.log(library.name); // "My library"
   * ```
   */
  get name(): string {
    return this._name;
  }

  /**
   * Setter for the name of the library.
   * @param name Name of the library.
   * @returns {string} Name of the library.
   * ```typescript
   * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
   * let cd = new CD("A Rush of Blood to the Head", 2002, song);
   * let artist = new Artist("Coldplay", 1000000, cd);
   * let library = new MusicLibrary("My library", artist);
   * library.name = "My new library";
   * console.log(library.name); // "My new library"
   * ```
   */
  set name(name: string) {
    this._name = name;
  }

  /**
   * Getter for the artists of the library.
   * @returns {BaseArtist[]} Artists of the library.
   * ```typescript
   * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
   * let cd = new CD("A Rush of Blood to the Head", 2002, song);
   * let artist = new Artist("Coldplay", 1000000, cd);
   * let library = new MusicLibrary("My library", artist);
   * console.log(library.artists); // [Artist]
   * ```
   */
  get artists(): BaseArtist[] {
    return this._artists;
  }

  set artists(artists: BaseArtist[]) {
    this._artists = artists;
  }

  /**
   * Shows the name of the library and the artists.
   * @returns {string} Name of the library and the artists.
   * ```typescript
   * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
   * let cd = new CD("A Rush of Blood to the Head", 2002, song);
   * let artist = new Artist("Coldplay", 1000000, cd);
   * let library = new MusicLibrary("My library", artist);
   * console.log(library.showInfo());
   * // Nombre de la biblioteca: My library
   * // Artistas: Coldplay
   * ```
   */
  showInfo(): string {
    const name = `Nombre de la biblioteca: ${this.name}`;
    const artists = `Artistas: ${this.artists
      .map((artist) => artist.name)
      .join(", ")}`;
    console.log(name);
    console.log(artists);
    return name + "\n" + artists;
  }

  /**
   * Searches a song by title.
   * @param title Title of the song.
   * @returns {Song | false} Song object or false if it doesn't exist.
   * ```typescript
   * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
   * let cd = new CD("A Rush of Blood to the Head", 2002, song);
   * let artist = new Artist("Coldplay", 1000000, cd);
   * let library = new MusicLibrary("My library", artist);
   * console.log(library.searchSong("The Scientist")); // Song
   * console.log(library.searchSong("The Scientist 2")); // false
   * ```
   */
  searchSong(title: string): Song | false {
    for (let artist of this.artists)
      for (let cd of artist.discography)
        for (let song of cd.songs) if (song.title === title) return song;
    return false;
  }

  /**
   * Searches a CD by title.
   * @param title Title of the CD.
   * @returns {CD | false} CD object or false if it doesn't exist.
   * ```typescript
   * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
   * let cd = new CD("A Rush of Blood to the Head", 2002, song);
   * let artist = new Artist("Coldplay", 1000000, cd);
   * let library = new MusicLibrary("My library", artist);
   * console.log(library.searchCD("A Rush of Blood to the Head")); // CD
   * console.log(library.searchCD("A Rush of Blood to the Head 2")); // false
   * ```
   */
  searchCD(title: string): CD | false {
    for (let artist of this.artists)
      for (let cd of artist.discography) if (cd.title === title) return cd;

    return false;
  }

  /**
   * Searches an artist by name.
   * @param name Name of the artist.
   * @returns {BaseArtist | false} Artist object or false if it doesn't exist.
   * ```typescript
   * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
   * let cd = new CD("A Rush of Blood to the Head", 2002, song);
   * let artist = new Artist("Coldplay", 1000000, cd);
   * let library = new MusicLibrary("My library", artist);
   * console.log(library.searchArtist("Coldplay")); // Artist
   * console.log(library.searchArtist("Coldplay 2")); // false
   * ```
   */
  searchArtist(name: string): BaseArtist | false {
    for (let artist of this.artists) if (artist.name === name) return artist;
    return false;
  }

  /**
   * Counts the number of songs in a disc of the library.
   * @param title Title of the CD.
   * @returns {number} Number of songs in the CD.
   * ```typescript
   * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
   * let cd = new CD("A Rush of Blood to the Head", 2002, song);
   * let artist = new Artist("Coldplay", 1000000, cd);
   * let library = new MusicLibrary("My library", artist);
   * console.log(library.countSongsInDisc("A Rush of Blood to the Head")); // 1
   * console.log(library.countSongsInDisc("A Rush of Blood to the Head 2")); // 0
   * ```
   */
  countSongsInDisc(title: string): number {
    let searchResult = this.searchCD(title);
    if (searchResult instanceof CD) return searchResult.songs.length;
    return 0;
  }

  /**
   * Counts the number of songs in a disc of the library.
   * @param title Title of the CD.
   * @returns {number} Number of songs in the CD.
   * ```typescript
   * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
   * let cd = new CD("A Rush of Blood to the Head", 2002, song);
   * let artist = new Artist("Coldplay", 1000000, cd);
   * let library = new MusicLibrary("My library", artist);
   * console.log(library.calculateCDDuration("A Rush of Blood to the Head")); // 2.34
   * console.log(library.calculateCDDuration("A Rush of Blood to the Head 2")); // 0
   * ```
   */
  calculateCDDuration(title: string): number {
    let searchResult = this.searchCD(title);
    if (searchResult instanceof CD) {
      return searchResult.songs.reduce((acc, song) => acc + song.duration, 0);
    }
    return 0;
  }

  /**
   * Counts the number of reproductions in a disc of the library.
   * @param title Title of the CD.
   * @returns {number} Number of songs in the CD.
   * ```typescript
   * let song = new Song("The Scientist", 2.34, true, 10000, "Pop", "Rock");
   * let cd = new CD("A Rush of Blood to the Head", 2002, song);
   * let artist = new Artist("Coldplay", 1000000, cd);
   * let library = new MusicLibrary("My library", artist);
   * console.log(library.calculateCDReproductions("A Rush of Blood to the Head")); // 10000
   * console.log(library.calculateCDReproductions("A Rush of Blood to the Head 2")); // 0
   * ```
   */
  calculateCDReproductions(title: string): number {
    let searchResult = this.searchCD(title);
    if (searchResult instanceof CD) {
      return searchResult.songs.reduce(
        (acc, song) => acc + song.reproductions,
        0
      );
    }
    return 0;
  }
}
