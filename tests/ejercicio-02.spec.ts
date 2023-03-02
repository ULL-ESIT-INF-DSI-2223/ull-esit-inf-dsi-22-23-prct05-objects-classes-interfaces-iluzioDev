import "mocha";
import { expect } from "chai";

import { Color } from "../src/ejercicio-02/token";
import { Token } from "../src/ejercicio-02/token";
import { RedToken } from "../src/ejercicio-02/red-token";
import { YellowToken } from "../src/ejercicio-02/yellow-token";

import { Board } from "../src/ejercicio-02/board";

import { FourConnect } from "../src/ejercicio-02/four-connect";
import { PrintableFourConnect } from "../src/ejercicio-02/printable-four-connect";

let red_token = new RedToken();
let yellow_token = new YellowToken();
let tokens: Token[] = [red_token, yellow_token];

let board = new Board();
let fourConnect = new FourConnect();
let printableFourConnect = new PrintableFourConnect();

describe("RedToken and YellowToken classes tests", () => {
  it("red_token is an instance of a subclass of Token", () => {
    expect(red_token).to.be.an.instanceof(Token);
  });
  it("yellow_token is an instance of a subclass of Token", () => {
    expect(yellow_token).to.be.an.instanceof(Token);
  });
  it("red_token is not of the same type as yellow_token", () => {
    expect(red_token.constructor).to.not.be.equal(yellow_token.constructor);
  });
  it("red_token is of type RedToken", () => {
    expect(red_token).to.be.an.instanceof(RedToken);
  });
  it("yellow_token is of type YellowToken", () => {
    expect(yellow_token).to.be.an.instanceof(YellowToken);
  });
  it("red_token.print() should return 'red'", () => {
    expect(red_token.print()).to.be.equal("red");
  });
  it("yellow_token.print() should return 'yellow'", () => {
    expect(yellow_token.print()).to.be.equal("yellow");
  });
});

describe("Board class tests", () => {
  it("Board should construct a board with 6 rows and 7 columns", () => {
    expect(board.rows).to.be.equal(6);
    expect(board.columns).to.be.equal(7);
  });
  it("Board.matrix should be an array of arrays of nulls", () => {
    expect(board.matrix).to.be.an("array");
    for (let i = 0; i < board.matrix.length; i++) {
      expect(board.matrix[i]).to.be.an("array");
      for (let j = 0; j < board.matrix[i].length; j++) {
        expect(board.matrix[i][j]).to.be.null;
      }
    }
  });
  it("Board should be empty", () => {
    expect(board.isEmpty()).to.be.true;
  });
  it("Board should be able to add a token to the specified position", () => {
    board.drop(1, red_token);
    expect(board.matrix[0][1]).to.be.equal(red_token);
  });
  it("Board should be able to know if it is not empty", () => {
    expect(board.isEmpty()).to.be.false;
  });
  it("Board should not be able to add a token to a full column", () => {
    for (let i = 0; i < board.rows - 1; i++) board.drop(1, red_token);
    expect(board.drop(1, red_token)).to.be.false;
  });
  it("Board should not be able to add a token to a column that does not exist", () => {
    expect(board.drop(8, red_token)).to.be.false;
  });
  it("Board should be able to remove a token from the specified column", () => {
    board.removeToken(1);
    expect(board.matrix[5][1]).to.be.equal(null);
  });
  it("Board should not be able to remove a token from an empty column", () => {
    for (let i = 0; i < board.rows; i++) board.removeToken(1);
    expect(board.removeToken(1)).to.be.false;
  });
  it("Board should not be able to remove a token from a column that does not exist", () => {
    expect(board.removeToken(8)).to.be.false;
  });
  it("Board should be able to check if a column is full", () => {
    for (let i = 0; i < board.rows; i++) board.drop(1, red_token);
    expect(board.columnIsFull(1)).to.be.equal(true);
  });
  it("Board should be able to check if a column is not full", () => {
    board.removeToken(1);
    expect(board.columnIsFull(1)).to.be.equal(false);
  });
  it("Board should be able to check if a column does not exist", () => {
    expect(board.columnIsFull(8)).to.be.equal(false);
  });
  it("Board should be able to know if its full", () => {
    for (let i = 0; i < board.columns; i++) {
      for (let j = 0; j < board.rows; j++) {
        board.drop(i, red_token);
      }
    }
    expect(board.isFull()).to.be.true;
  });
  it("Board should be able to know if its not full", () => {
    board.removeToken(1);
    expect(board.isFull()).to.be.false;
  });
});

describe("FourConnect class tests", () => {
  it("fourConnect should construct a board with 6 rows and 7 columns", () => {
    expect(fourConnect.board.rows).to.be.equal(6);
    expect(fourConnect.board.columns).to.be.equal(7);
  });
  it("fourConnect.board should be an instance of Board", () => {
    expect(fourConnect.board).to.be.an.instanceof(Board);
  });
  it("fourConnect.board = new Board() should reset the board", () => {
    fourConnect.board = new Board();
    expect(fourConnect.board.rows).to.be.equal(6);
    expect(fourConnect.board.columns).to.be.equal(7);
    expect(fourConnect.board.isEmpty()).to.be.true;
  });
  it("fourConnect should be able to know which player's turn it is", () => {
    expect(fourConnect.currentPlayer).to.be.an.instanceof(RedToken);
  });
  it("fourConnect should be able to switch players", () => {
    fourConnect.currentPlayer = yellow_token;
    expect(fourConnect.currentPlayer).to.be.equal(yellow_token);
  });
  it("fourConnect should be able to drop a token in a column", () => {
    fourConnect.board = new Board();
    expect(fourConnect.drop(1)).to.be.equal(0);
  });
  it("If a column is full, drop method should return false", () => {
    for (let i = 0; i < 6; i++) fourConnect.drop(1);
    expect(fourConnect.drop(1)).to.be.false;
  });
  it("fourConnect should be able to check if a player has won horizontally", () => {
    let j;
    fourConnect.board = new Board();
    for (j = 0; j < 4; j++) fourConnect.drop(j);
    expect(fourConnect.checkHorizontal(0, j - 1)).to.be.true;
  });
  it("fourConnect should be able to check if a player has not won horizontally", () => {
    let j;
    fourConnect.board = new Board();
    for (j = 0; j < 3; j++) fourConnect.drop(j);
    expect(fourConnect.checkHorizontal(0, j - 1)).to.be.false;
  });
  it("fourConnect should be able to check if a player has won vertically", () => {
    let i;
    fourConnect.board = new Board();
    for (i = 0; i < 4; i++) fourConnect.drop(0);
    expect(fourConnect.checkVertical(0, i - 1)).to.be.true;
  });
  it("fourConnect should be able to check if a player has not won vertically", () => {
    let i;
    fourConnect.board = new Board();
    for (i = 0; i < 3; i++) fourConnect.drop(0);
    expect(fourConnect.checkVertical(i - 1, 0)).to.be.false;
  });
  it("fourConnect should be able to check if a player has won diagonally", () => {
    fourConnect.board = new Board();
    for (let i = 0; i < 4; i++) {
      fourConnect.drop(i);
      for (let j = 0; j < i; j++) {
        fourConnect.drop(i);
      }
    }
    expect(fourConnect.checkDiagonal(0, 0)).to.be.true;
    fourConnect.board = new Board();
    for (let i = 3; i >= 0; i--) {
      fourConnect.drop(i);
      for (let j = 0; j < i; j++) {
        fourConnect.drop(i);
      }
    }
    expect(fourConnect.checkDiagonal(0, 0)).to.be.true;
  });
  it("fourConnect should be able to check if a player has not won diagonally", () => {
    fourConnect.board = new Board();
    for (let i = 0; i < 3; i++) {
      fourConnect.drop(i);
      for (let j = 0; j < i; j++) {
        fourConnect.drop(i);
      }
    }
    expect(fourConnect.checkDiagonal(0, 0)).to.be.false;
    fourConnect.board = new Board();
    for (let i = 2; i >= 0; i--) {
      fourConnect.drop(i);
      for (let j = 0; j < i; j++) {
        fourConnect.drop(i);
      }
    }
    expect(fourConnect.checkDiagonal(0, 0)).to.be.false;
  });
  it("fourConnect should be able to check if someone has won", () => {
    fourConnect.board = new Board();
    for (let i = 0; i < 4; i++) {
      fourConnect.drop(i);
      for (let j = 0; j < i; j++) {
        fourConnect.drop(i);
      }
    }
    expect(fourConnect.checkWin(0, 0)).to.be.true;
  });
  it("fourConnect should be able to check if someone has not won", () => {
    fourConnect.board = new Board();
    for (let i = 0; i < 3; i++) {
      fourConnect.drop(i);
      for (let j = 0; j < i; j++) {
        fourConnect.drop(i);
      }
    }
    expect(fourConnect.checkWin(0, 0)).to.be.false;
  });
  it("fourConnect should know if a player has won", () => {
    fourConnect.board = new Board();
    for (let i = 0; i < 4; i++) {
      fourConnect.drop(i);
      for (let j = 0; j < i; j++) {
        fourConnect.drop(i);
      }
    }
  });
});

describe("PrintableFourConnect class tests", () => {
  it("PrintableFourConnect should be able to print the board", () => {
    expect(printableFourConnect.print()).to.be.equal(
      "\x1b[34m| | | | | | | |\n\x1b[34m| | | | | | | |\n\x1b[34m| | | | | | | |\n\x1b[34m| | | | | | | |\n\x1b[34m| | | | | | | |\n\x1b[34m| | | | | | | |\n ^ ^ ^ ^ ^ ^ ^ \n"
    );
  });
  it("PrintableFourConnect should be able to print the board with a token", () => {
    printableFourConnect.drop(0);
    printableFourConnect.currentPlayer = yellow_token;
    printableFourConnect.drop(0);
    expect(printableFourConnect.print()).to.be.equal(
      "\x1b[34m| | | | | | | |\n\x1b[34m| | | | | | | |\n\x1b[34m| | | | | | | |\n\x1b[34m| | | | | | | |\n\x1b[34m|\x1b[33mY\x1b[34m| | | | | | |\n\x1b[34m|\x1b[31mR\x1b[34m| | | | | | |\n ^ ^ ^ ^ ^ ^ ^ \n"
    );
  });
});
