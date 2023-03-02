import { RedToken } from "./red-token";
import { YellowToken } from "./yellow-token";
import { FourConnect } from "./four-connect";

export class PrintableFourConnect extends FourConnect {
  constructor() {
    super();
  }

  print(): string {
    let row,
      result = "";
    for (let i = this.board.rows - 1; i >= 0; i--) {
      row = "\x1b[34m|";
      for (let j = 0; j < this.board.columns; j++) {
        if (this.board.matrix[i][j] === null) {
          row += " ";
        } else {
          if (this.board.matrix[i][j] instanceof RedToken)
            row += "\x1b[31mR\x1b[34m";
          else row += "\x1b[33mY\x1b[34m";
        }
        row += "|";
      }
      result += row + "\n";
      console.log(row);
    }
    row = " ^ ^ ^ ^ ^ ^ ^ \n";
    console.log(row);
    result += row;
    return result;
  }
}
