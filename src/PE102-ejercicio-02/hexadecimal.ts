/**
 * Hexadecimal number class
 * @class Hexadecimal
 * @param {number} _number
 * @method valueOf
 * @method toString
 * @method parse
 * @returns Hexadecimal Object.
 * ```typescript
 * let hex = new Hexadecimal(255);
 * console.log(hex.toString()); // FF
 * ```
 */
export class Hexadecimal {
  constructor(private _number: number) {}

  /**
   * Getter for the hexadecimal number decimal value.
   * @returns {number} Decimal number of the hexadecimal number.
   * ```typescript
   * let hex = new Hexadecimal(255);
   * console.log(hex.valueOf()); // 255
   * ```
   */
  valueOf(): number {
    return this._number;
  }

  /**
   * Getter for the hexadecimal number.
   * @returns {string} String of the hexadecimal number.
   * ```typescript
   * let hex = new Hexadecimal(255);
   * console.log(hex.toString()); // FF
   * ```
   */
  toString(): string {
    return this._number.toString(16).toUpperCase();
  }

  /**
   * Converts a hexadecimal number to decimal.
   * @param {string} hex Hexadecimal number.
   * @returns {number} Decimal number.
   * ```typescript
   * console.log(Hexadecimal.parse("FF")); // 255
   * ```
   */
  static parse(hex: string): number {
    return parseInt(hex, 16);
  }
}

/**
 * Adds two hexadecimal numbers.
 * @param {Hexadecimal} a First hexadecimal number.
 * @param {Hexadecimal} b Second hexadecimal number.
 * @returns {Hexadecimal} Sum of the two hexadecimal numbers.
 * ```typescript
 * let hex1 = new Hexadecimal(255);
 * let hex2 = new Hexadecimal(255);
 * console.log(add(hex1, hex2).toString()); // 1FE
 * ```
 */
export function add(a: Hexadecimal, b: Hexadecimal): Hexadecimal {
  return new Hexadecimal(a.valueOf() + b.valueOf());
}

/**
 * Subtracts two hexadecimal numbers.
 * @param {Hexadecimal} a First hexadecimal number.
 * @param {Hexadecimal} b Second hexadecimal number.
 * @returns {Hexadecimal} Difference of the two hexadecimal numbers.
 * ```typescript
 * let hex1 = new Hexadecimal(255);
 * let hex2 = new Hexadecimal(255);
 * console.log(sub(hex1, hex2).toString()); // 0
 * ```
 */
export function sub(a: Hexadecimal, b: Hexadecimal): Hexadecimal {
  return new Hexadecimal(a.valueOf() - b.valueOf());
}
