import { RedToken } from "./red-token";
import { YellowToken } from "./yellow-token";
import { PrintableFourConnect } from "./printable-four-connect";

/**
 * Function to play a game of 4-Connect
 * @returns void
 */
export function play(): void {
  let game = new PrintableFourConnect();
  console.log("\n---------------");
  console.log("4-CONNECT GAME ");
  console.log("---------------\n");
  game.print();
  while (!game.board.isFull()) {
    const prompt = require("prompt-sync")();
    console.log("----------------------------");
    game.currentPlayer instanceof RedToken
      ? console.log("\x1b[31m%s\x1b[34m", "JUGADOR 1")
      : console.log("\x1b[33m%s\x1b[34m", "JUGADOR 2");
    console.log("----------------------------");
    const column = parseInt(prompt("Columna: ")) - 1;
    console.log("----------------------------\n");
    let row = game.board.drop(column, game.currentPlayer);

    while (row === false) {
      console.log("Columna llena. Intente de nuevo");
      console.log("----------------------------");
      const column = parseInt(prompt("Columna: ")) - 1;
      console.log("----------------------------\n");
      row = game.board.drop(column, game.currentPlayer);
    }
    game.print();
    if (game.checkWin(row, column)) {
      console.log("----------------------------");
      let victoria =
        game.currentPlayer instanceof RedToken
          ? "GANA EL JUGADOR 1!"
          : "GANA EL JUGADOR 2!";
      if (victoria === "GANA EL JUGADOR 1!")
        console.log("\x1b[31m%s\x1b[34m", "GANA EL JUGADOR 1!");
      else console.log("\x1b[33m%s\x1b[34m", "GANA EL JUGADOR 2!");
      console.log("----------------------------");
      return;
    }
    game.currentPlayer instanceof RedToken
      ? (game.currentPlayer = new YellowToken())
      : (game.currentPlayer = new RedToken());
  }
  console.log("Empate");
  return;
}

play();
