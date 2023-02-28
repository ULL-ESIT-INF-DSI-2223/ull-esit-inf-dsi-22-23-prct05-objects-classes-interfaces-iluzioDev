import "mocha";
import { expect } from "chai";

import { mediaFilter } from "../src/PE102-ejercicio-01/mediaFilter";

describe("mediaFilter function tests", () => {
  let notImage = [[0, 255, 0, 255]];
  let image1 = [
    [0, 255, 0],
    [255, 0, 255],
    [0, 255, 0],
  ];
  let image2 = [
    [0, 255, 0, 255],
    [255, 0, 255, 0],
    [0, 255, 0, 255],
    [255, 0, 255, 0],
  ];
  it("image1.lenth should be 3", () => {
    expect(image1.length).to.equal(3);
  });
  it("mediaFilter(image1) should return", () => {
    expect(mediaFilter(image1)).to.deep.equal([
      [127, 95, 127],
      [95, 127, 95],
      [127, 95, 127],
    ]);
  });
  it("mediaFilter(image2) should return", () => {
    expect(mediaFilter(image2)).to.deep.equal([
      [127, 127, 127, 127],
      [127, 127, 127, 127],
      [127, 127, 127, 127],
      [127, 127, 127, 127],
    ]);
  });
  it("mediaFilter(notImage) should return undefined", () => {
    expect(mediaFilter(notImage)).to.be.undefined;
  });
});
