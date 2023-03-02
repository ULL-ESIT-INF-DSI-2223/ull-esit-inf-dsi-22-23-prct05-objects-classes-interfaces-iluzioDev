import { Color } from "./token";
import { Token } from "./token";

/**
 * Class representing a yellow token.
 * @class YellowToken
 * @extends Token
 * @property {Color} color - The color of the token.
 * ```typescript
 * let token = new YellowToken();
 * console.log(token.color); // 'yellow'
 * ```
 */
export class YellowToken extends Token {
  constructor() {
    super("yellow");
  }
}
