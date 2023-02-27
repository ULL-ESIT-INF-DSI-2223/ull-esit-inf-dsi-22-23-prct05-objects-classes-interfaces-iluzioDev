import "mocha";
import { expect } from "chai";

import { Hexadecimal } from "../src/PE102-ejercicio-02/hexadecimal";

describe("Hexadecimal class tests", () => {
  let hex1 = new Hexadecimal(10);
  it('hex1.valueOf() should be 10', () => {
    expect(hex1.valueOf()).to.equal(10);
  });
  it('hex1.toString() should be A', () => {
    expect(hex1.toString()).to.equal('A');
  });
  it('Hexadecimal.parse("A") should be 10', () => {
    expect(Hexadecimal.parse("A")).to.equal(10);
  });
});