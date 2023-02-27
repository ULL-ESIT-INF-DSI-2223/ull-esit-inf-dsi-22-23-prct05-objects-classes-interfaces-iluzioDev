export class Hexadecimal {
  constructor(private _number: number) {}

  valueOf(): number {
    return this._number;
  }

  toString(): string {
    return this._number.toString(16).toUpperCase();
  }

  static parse(hex: string): number {
    return parseInt(hex, 16);
  }
}

export function add(a: Hexadecimal, b: Hexadecimal): Hexadecimal {
  return new Hexadecimal(a.valueOf() + b.valueOf());
}

export function sub(a: Hexadecimal, b: Hexadecimal): Hexadecimal {
  return new Hexadecimal(a.valueOf() - b.valueOf());
}

