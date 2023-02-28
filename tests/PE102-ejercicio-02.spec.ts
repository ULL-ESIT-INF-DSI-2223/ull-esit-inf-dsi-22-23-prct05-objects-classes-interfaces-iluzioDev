import "mocha";
import { expect } from "chai";

import { Hexadecimal } from "../src/PE102-ejercicio-02/hexadecimal";
import { add } from "../src/PE102-ejercicio-02/hexadecimal";
import { sub } from "../src/PE102-ejercicio-02/hexadecimal";

describe("Hexadecimal class tests", () => {
  let hex1 = new Hexadecimal(10);
  let hex2 = new Hexadecimal(25);
  it("hex1.valueOf() should be 10", () => {
    expect(hex1.valueOf()).to.equal(10);
  });
  it("hex1.toString() should be A", () => {
    expect(hex1.toString()).to.equal("A");
  });
  it('Hexadecimal.parse("A") should be 10', () => {
    expect(Hexadecimal.parse("A")).to.equal(10);
  });
  it('Hexadecimal.parse("0x26") should be 38', () => {
    expect(Hexadecimal.parse("0x26")).to.equal(38);
  });
  it("hex1 + hex2 should be 35", () => {
    expect(add(hex1, hex2).valueOf()).to.equal(35);
  });
  it("hex1 - hex2 should be -15", () => {
    expect(sub(hex1, hex2).valueOf()).to.equal(-15);
  });
});
