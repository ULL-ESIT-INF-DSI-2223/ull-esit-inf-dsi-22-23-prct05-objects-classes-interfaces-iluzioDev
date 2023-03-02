import { Color } from "./token";
import { Token } from "./token";

/**
 * Class representing a red token.
 * @class RedToken
 * @extends Token
 * @property {Color} color - The color of the token.
 * ```typescript
 * let token = new RedToken();
 * console.log(token.color); // 'red'
 * ```
 */
export class RedToken extends Token {
  constructor() {
    super("red");
  }
}
