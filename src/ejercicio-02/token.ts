/**
 * Type definition for the color of a token.
 * @typedef {('red'|'yellow')} Color
 * @memberof Token
 */
export type Color = "red" | "yellow";

/**
 * Type definition for the token information.
 * @interface TokenInfo
 * @property {Color} color - The color of the token.
 */
export interface TokenInfo {
  readonly color: Color;
}

/**
 * Class representing a token, which can be dropped into a board.
 * @abstract
 * @class Token
 * @implements {TokenInfo}
 * @property {Color} color - The color of the token.
 * ```typescript
 * let token = new RedToken();
 * console.log(token.color); // 'red'
 * ```
 */
export abstract class Token implements TokenInfo {
  constructor(public readonly color: Color) {}

  print(): string {
    return this.color;
  }
}
