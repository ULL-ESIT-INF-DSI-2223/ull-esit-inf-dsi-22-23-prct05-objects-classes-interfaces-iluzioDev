import { CD } from './cd';

interface ArtistInfo {
  readonly _name: string;
  discography: CD[];
}

export class Artist implements ArtistInfo {
  _discography: CD[];
  constructor(public readonly _name: string, private monthlyListeners: number, ...discography: CD[]) {
    this._discography = discography;
  }
  
  get discography(): CD[] {
    return this._discography;
  }

  set discography(discography: CD[]) {
    this._discography = discography;
  }

  addCD(cd: CD): void {
    this._discography.push(cd);
  }
}
