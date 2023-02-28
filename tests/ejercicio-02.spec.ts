import "mocha";
import { expect } from "chai";

import { Token } from "../src/ejercicio-02/token";
import { RedToken } from "../src/ejercicio-01/token";
import { YellowToken } from "../src/ejercicio-01/token";

import { Board } from "../src/ejercicio-02/board";

import { FourConnect } from "../src/ejercicio-01/four-connect";
import { PrintableFourConnect } from "../src/ejercicio-01/printable-four-connect";

let red_token = new RedToken();
let yellow_token = new YellowToken();
let tokens: Token[] = [red_token, yellow_token];

let board = new Board();
let fourConnect = new FourConnect();
let printableFourConnect = new PrintableFourConnect();

describe("RedToken and YellowToken classes tests", () => {
  it("red_token should be a subclass of Token", () => {
    expect(red_token).to.be.an.instanceOf(Token);
  });
  it("yellow_token should be a subclass of Token", () => {
    expect(yellow_token).to.be.an.instanceOf(Token);
  });
  it("red_token is not of the same class as yellow_token", () => {
    expect(red_token).to.not.be.an.instanceOf(typeof yellow_token);
  });
});

describe("Board class tests", () => {
  it("Board should construct a board with 6 rows and 7 columns", () => {
    expect(board.length).to.be.equal(6);
    for (let i = 0; i < board.length; i++)
      expect(board[i].length).to.be.equal(7);
  });
  it("Board should be empty", () => {
    for (let i = 0; i < board.length; i++)
      for (let j = 0; j < board[i].length; j++)
        expect(board[i][j]).to.be.equal(null);
  });
  it("Board should be able to add a token to the specified position", () => {
    board.drop(1, red_token);
    expect(board[1][1]).to.be.equal(red_token);
  });
  it("Board should be able to remove a token from the specified position", () => {
    board.removeToken(1);
    expect(board[1][1]).to.be.equal(null);
  });
  it("Board should be able to check if a position is empty", () => {
    expect(board.isEmpty(1, 1)).to.be.equal(true);
  });
  it("Board should be able to check if a position is not empty", () => {
    board.drop(1, 1, red_token);
    expect(board.isEmpty(1, 1)).to.be.equal(false);
  });
  it("Board should be able to check if a column is full", () => {
    for (let i = 0; i < board.length; i++) board.drop(1, i, red_token);
    expect(board.isFull(1)).to.be.equal(true);
  });
  it("Board should be able to check if a column is not full", () => {
    board.removeToken(1, 5);
    expect(board.isFull(1)).to.be.equal(false);
  });
  it("Board should return a message if a player tries to add a token to a full column", () => {
    expect(board.drop(1, red_token)).to.be.equal("Column is full");
  });
});

describe("FourConnect class tests", () => {
  it("FourConnect should construct a board with 6 rows and 7 columns", () => {
    expect(fourConnect.board.length).to.be.equal(6);
    for (let i = 0; i < fourConnect.board.length; i++)
      expect(fourConnect.board[i].length).to.be.equal(7);
  });
  it("Drop method should add a token to the board in the specified column", () => {
    fourConnect.drop(1);
    expect(fourConnect.board[0][1]).to.be.equal("X");
  });
  it("If a column is full, drop method should throw an exception", () => {
    for (let i = 0; i < 6; i++) fourConnect.drop(1);
    expect(fourConnect.drop(1)).to.throw("Column is full");
  });
  it("FourConnect should be able to check if a player has won", () => {
    for (let i = 0; i < 4; i++) fourConnect.drop(1);
    expect(fourConnect.checkWin()).to.be.equal(true);
  });
  it("FourConnect should be able to check if a player has not won", () => {
    for (let i = 0; i < 3; i++) fourConnect.drop(4);
    expect(fourConnect.checkWin()).to.be.equal(false);
  });
  it("FourConnect should identify last player", () => {
    expect(fourConnect.lastPlayer).to.be.equal("Red");
  });
});

describe("PrintableFourConnect class tests", () => {
  it("PrintableFourConnect should be able to print the board", () => {
    expect(printableFourConnect.print()).to.be.equal(
      " | | | | | | | |\n | | | | | | | |\n | | | | | | | |\n | | | | | | | |\n | | | | | | | |\n | | | | | | | |"
    );
  });
});
