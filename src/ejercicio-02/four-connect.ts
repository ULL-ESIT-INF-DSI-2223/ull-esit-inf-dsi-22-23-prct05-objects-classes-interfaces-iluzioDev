import { Token } from "./token";
import { RedToken } from "./red-token";
import { YellowToken } from "./yellow-token";

import { Board } from "./board";

/**
 * Type definition for the four connect information.
 * @interface FourConnectInfo
 * @property {Token} currentPlayer - The current player's token.
 * @property {Board} board - The board.
 */
export interface FourConnectInfo {
  currentPlayer: Token;
  board: Board;
}

/**
 * Class representing a four connect game.
 * @class FourConnect
 * @implements {FourConnectInfo}
 * @property {Token} currentPlayer - The current player's token.
 * @property {Board} board - The board.
 * @example
 * let fourConnect = new FourConnect();
 * console.log(fourConnect.currentPlayer); // RedToken
 * console.log(fourConnect.board); // Board
 * ```
 */
export class FourConnect implements FourConnectInfo {
  protected _currentPlayer: Token = new RedToken();
  protected _board: Board = new Board();
  constructor() {}

  /**
   * Getter for the current player's token.
   * @returns {Token} The current player's token.
   * @example
   * ```typescript
   * let fourConnect = new FourConnect();
   * console.log(fourConnect.currentPlayer); // RedToken
   * ```
   */
  get currentPlayer(): Token {
    return this._currentPlayer;
  }

  /**
   * Setter for the current player's token.
   * @param {Token} token - The current player's token.
   * @example
   * ```typescript
   * let fourConnect = new FourConnect();
   * fourConnect.currentPlayer = new YellowToken;
   * console.log(fourConnect.currentPlayer); // YellowToken
   * ```
   */
  set currentPlayer(token: Token) {
    this._currentPlayer = token;
  }

  /**
   * Getter for the board.
   * @returns {Board} The board.
   * @example
   * ```typescript
   * let fourConnect = new FourConnect();
   * console.log(fourConnect.board); // Board
   * ```
   */
  get board(): Board {
    return this._board;
  }

  /**
   * Setter for the board.
   * @param {Board} board - The board.
   * @example
   * ```typescript
   * let fourConnect = new FourConnect();
   * fourConnect.board = new Board;
   * console.log(fourConnect.board); // Board
   * ```
   */
  set board(board: Board) {
    this._board = board;
  }

  /**
   * Method to insert a token in the board.
   * @param {number} column - The column where the token will be inserted.
   * @returns {number | false} The row where the token was inserted or false if the column is full.
   * @example
   * ```typescript
   * let fourConnect = new FourConnect();
   * console.log(fourConnect.drop(0)); // 0
   * console.log(fourConnect.drop(0)); // 1
   * console.log(fourConnect.drop(0)); // 2
   * ```
   */
  drop(column: number): number | false {
    return this._board.drop(column, this._currentPlayer);
  }

  /**
   * Method to check if the game is over.
   * @returns {boolean} True if the game is over, false otherwise.
   * @example
   * ```typescript
   * let fourConnect = new FourConnect();
   * fourConnect.drop(0);
   * fourConnect.drop(1);
   * fourConnect.drop(2);
   * fourConnect.drop(3);
   * console.log(fourConnect.checkWin()); // true
   * ```
   */
  checkWin(i: number, j: number): boolean {
    return (
      this.checkHorizontal(i, j) ||
      this.checkVertical(i, j) ||
      this.checkDiagonal(i, j)
    );
  }

  /**
   * Method to check if a player has won horizontally.
   * @param {number} i - The row where the token was inserted.
   * @param {number} j - The column where the token was inserted.
   * @returns {boolean} True if the player has won horizontally, false otherwise.
   * @example
   * ```typescript
   * let fourConnect = new FourConnect();
   * fourConnect.drop(0);
   * fourConnect.drop(1);
   * fourConnect.drop(2);
   * fourConnect.drop(3);
   * console.log(fourConnect.checkHorizontal(0, 3)); // true
   * ```
   */
  checkHorizontal(i: number, j: number): boolean {
    let left = j,
      right = j;
    while (
      left >= 0 &&
      this._board.matrix[i][left]?.color === this._board.matrix[i][j]?.color
    )
      left--;
    while (
      right < this._board.columns &&
      this._board.matrix[i][right]?.color === this._board.matrix[i][j]?.color
    )
      right++;
    return right - left - 1 >= 4;
  }

  /**
   * Method to check if a player has won vertically.
   * @param {number} i - The row where the token was inserted.
   * @param {number} j - The column where the token was inserted.
   * @returns {boolean} True if the player has won vertically, false otherwise.
   * @example
   * ```typescript
   * let fourConnect = new FourConnect();
   * fourConnect.drop(0);
   * fourConnect.drop(0);
   * fourConnect.drop(0);
   * fourConnect.drop(0);
   * console.log(fourConnect.checkVertical(3, 0)); // true
   * ```
   */
  checkVertical(i: number, j: number): boolean {
    let down = i,
      up = i;
    while (
      down >= 0 &&
      this._board.matrix[down][j]?.color === this._board.matrix[i][j]?.color
    )
      down--;
    while (
      up < this._board.rows &&
      this._board.matrix[up][j]?.color === this._board.matrix[i][j]?.color
    )
      up++;
    return up - down - 1 >= 4;
  }

  /**
   * Method to check if a player has won diagonally.
   * @param {number} i - The row where the token was inserted.
   * @param {number} j - The column where the token was inserted.
   * @returns {boolean} True if the player has won diagonally, false otherwise.
   * @example
   * ```typescript
   * let fourConnect = new FourConnect();
   * fourConnect.drop(0);
   * fourConnect.drop(1);
   * fourConnect.drop(1);
   * fourConnect.drop(2);
   * fourConnect.drop(2);
   * fourConnect.drop(2);
   * fourConnect.drop(3);
   * fourConnect.drop(3);
   * fourConnect.drop(3);
   * fourConnect.drop(3);
   * console.log(fourConnect.checkDiagonal(3, 3)); // true
   * ```
   */
  checkDiagonal(i: number, j: number): boolean {
    let left = j,
      right = j,
      down = i,
      up = i;
    while (
      left >= 0 &&
      down >= 0 &&
      this._board.matrix[down][left]?.color === this._board.matrix[i][j]?.color
    ) {
      left--;
      down--;
    }
    while (
      right < this._board.columns &&
      up < this._board.rows &&
      this._board.matrix[up][right]?.color === this._board.matrix[i][j]?.color
    ) {
      right++;
      up++;
    }
    if (right - left - 1 >= 4) return true;
    (left = j), (right = j), (down = i), (up = i);
    while (
      left >= 0 &&
      up < this._board.rows &&
      this._board.matrix[up][left]?.color === this._board.matrix[i][j]?.color
    ) {
      left--;
      up++;
    }
    while (
      right < this._board.columns &&
      down >= 0 &&
      this._board.matrix[down][right]?.color === this._board.matrix[i][j]?.color
    ) {
      right++;
      down--;
    }
    return right - left - 1 >= 4;
  }
}
