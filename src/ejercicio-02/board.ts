import { Token } from "./token";
import { RedToken } from "./red-token";

/**
 * Type definition for the board information.
 * @interface BoardInfo
 * @property {number} rows - The number of rows in the board.
 * @property {number} columns - The number of columns in the board.
 * @property {(Token | null)[][]} matrix - The matrix of tokens in the board.
 */
export interface BoardInfo {
  readonly rows: number;
  readonly columns: number;
  matrix: (Token | null)[][];
}

/**
 * Class representing a board, which can be filled with tokens.
 * @class Board
 * @implements {BoardInfo}
 * @property {number} rows - The number of rows in the board.
 * @property {number} columns - The number of columns in the board.
 * @property {(Token | null)[][]} matrix - The matrix of tokens in the board.
 * @property {boolean} isEmpty - Whether the board is empty or not.
 * @property {boolean} isFull - Whether the board is full or not.
 * @example
 * ```typescript
 * let board = new Board();
 * console.log(board.rows); // 6
 * console.log(board.columns); // 7
 * ```
 */
export class Board implements BoardInfo {
  public readonly rows: number = 6;
  public readonly columns: number = 7;
  private _matrix: (Token | null)[][] = [];
  constructor() {
    for (let i = 0; i < this.rows; i++) {
      this._matrix[i] = [];
      for (let j = 0; j < this.columns; j++) {
        this._matrix[i][j] = null;
      }
    }
  }

  /**
   * Getter for the matrix of tokens in the board.
   * @returns {(Token | null)[][]} The matrix of tokens in the board.
   * @example
   * ```typescript
   * let board = new Board();
   * console.log(board.matrix);
   * // [
   * //   [null, null, null, null, null, null, null],
   * //   [null, null, null, null, null, null, null],
   * //   [null, null, null, null, null, null, null],
   * //   [null, null, null, null, null, null, null],
   * //   [null, null, null, null, null, null, null],
   * //   [null, null, null, null, null, null, null]
   * // ]
   */
  get matrix(): (Token | null)[][] {
    return this._matrix;
  }

  /**
   * Checks whether the board is empty or not.
   * @returns {boolean} Whether the board is empty or not.
   * @example
   * ```typescript
   * let board = new Board();
   * console.log(board.isEmpty); // true
   * board.drop(0, new RedToken());
   * console.log(board.isEmpty); // false
   * board.removeToken(0);
   * console.log(board.isEmpty); // true
   * ```
   */
  isEmpty(): boolean {
    for (let i = 0; i < this.rows; i++)
      for (let j = 0; j < this.columns; j++)
        if (this._matrix[i][j] !== null) return false;
    return true;
  }

  /**
   * Inserts a token in the board.
   * @param {number} column - The column where the token will be inserted.
   * @param {Token} token - The token to insert.
   * @returns {number | false} The row where the token was inserted, or false if the column is full.
   * @example
   * ```typescript
   * let board = new Board();
   * console.log(board.drop(0, new RedToken())); // 0
   * console.log(board.drop(0, new RedToken())); // 1
   * console.log(board.drop(0, new RedToken())); // 2
   * console.log(board.drop(0, new RedToken())); // 3
   * console.log(board.drop(0, new RedToken())); // 4
   * console.log(board.drop(0, new RedToken())); // 5
   * console.log(board.drop(0, new RedToken())); // false
   * ```
   */
  drop(column: number, token: Token): number | false {
    if (column < 0 || column >= this.columns) return false;
    for (let i = 0; i < this.rows; i++) {
      if (this._matrix[i][column] === null) {
        this._matrix[i][column] = token;
        return i;
      }
    }
    return false;
  }

  /**
   * Removes a token from the board.
   * @param {number} column - The column where the token will be removed.
   * @returns {boolean} Whether the token was removed or not.
   * @example
   * ```typescript
   * let board = new Board();
   * console.log(board.drop(0, new RedToken())); // 0
   * console.log(board.removeToken(0)); // true
   * ```
   */
  removeToken(column: number): boolean {
    if (column < 0 || column >= this.columns) return false;
    for (let i = this.rows - 1; i >= 0; i--) {
      if (this._matrix[i][column] !== null) {
        this._matrix[i][column] = null;
        return true;
      }
    }
    return false;
  }

  /**
   * Checks whether the board is full or not.
   * @returns {boolean} Whether the board is full or not.
   * @example
   * ```typescript
   * let board = new Board();
   * console.log(board.isFull()); // false
   * for (let i = 0; i < board.columns; i++) {
   *  for (let j = 0; j < board.rows; j++) {
   *   board.drop(i, new RedToken());
   *  }
   * }
   * console.log(board.isFull()); // true
   * ```
   */
  isFull(): boolean {
    for (let i = 0; i < this.columns; i++)
      if (!this.columnIsFull(i)) return false;
    return true;
  }

  /**
   * Checks whether a column is full or not.
   * @param column Column to check.
   * @returns True if the column is full, false otherwise.
   * @example
   * ```typescript
   * let board = new Board();
   * console.log(board.columnIsFull(0)); // false
   * for (let i = 0; i < board.rows; i++) board.drop(0, new RedToken());
   * console.log(board.columnIsFull(0)); // true
   * ```
   */
  columnIsFull(column: number): boolean {
    if (column < 0 || column >= this.columns) return false;
    for (let i = 0; i < this.rows; i++)
      if (this._matrix[i][column] === null) return false;
    return true;
  }
}
