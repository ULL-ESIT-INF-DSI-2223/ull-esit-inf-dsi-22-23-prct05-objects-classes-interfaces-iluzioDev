import "mocha";
import { expect } from "chai";

import { Song } from "../src/ejercicio-01/song";
import { CD } from "../src/ejercicio-01/cd";
import { Artist } from "../src/ejercicio-01/artist";
import { MusicLibrary } from "../src/ejercicio-01/music-library";

describe("Song function tests", () => {
  let song1 = new Song("Blessed and Possessed", 4.5, false, 1900000, "Metal");
  let song2 = new Song("Mordekaiser, the Iron Revenant", 2.48, false, 2000000, "Metal", "Soundtrack");
  let song3 = new Song("Entre dos tierras", 6.08, true, 620000000, "Rock", "Pop", "Latin")
  it("song1._title is 'Blessed and Possessed'", () => {
    expect(song1._title).to.be.equal("Blessed and Possessed");
  });
  it("song1._duration is 4.5", () => {
    expect(song1._duration).to.be.equal(4.5);
  });
  it("song1._single is false", () => {
    expect(song1._single).to.be.equal(false);
  });
  it("song1.reproductions is 1.9M", () => {
    expect(song1.reproductions).to.be.equal(1900000);
  });
  it("song1.genres is Metal", () => {
    expect(song1.genres).to.have.members(["Metal"]);
  });
  it("song2.genres are Metal and Soundtrack", () => {
    expect(song2.genres).to.have.members(["Metal", "Soundtrack"]);
  });
  it("song1 and song2 are both metal songs", () => {
    expect(song1.genres.includes("Metal") && song2.genres.includes("Metal")).to.be.equal(true);
  });
  it("song1.AddGenre('Rock') adds Rock to song1.genres", () => {
    song1.addGenre("Rock");
    expect(song1.genres).to.have.members(["Rock", "Metal"]);
  });
  it("song3 is a single", () => {
    expect(song3._single).to.be.equal(true);
  });
});

describe("CD function tests", () => {
  let song1 = new Song("Bad to the Bone", 4.5, true, 41000000, "Rock", "Blues");
  let cd1 = new CD("Bad to the Bone", 1987, song1);

  let song2 = new Song("Enter Hallownest", 1.29, false, 410000, "Orchestral", "Soundtrack");
  let song3 = new Song("Mantis Lords", 1.45, false, 567000, "Orchestral", "Soundtrack", "Choral");
  let song4 = new Song("Radiance", 2.17, false, 548000, "Orchestral", "Soundtrack", "Choral");

  let cd2 = new CD("Hollow Knight OST", 2017, song2, song3, song4);

  it("cd1._title is 'Bad to the Bone'", () => {
    expect(cd1._title).to.be.equal("Bad to the Bone");
  });
  it("cd1._year is 1987", () => {
    expect(cd1._year).to.be.equal(1987);
  });
  it("cd1.songs is an array with song1", () => {
    expect(cd1.songs).to.have.members([song1]);
  });
  it("cd2._title is 'Hollow Knight OST'", () => {
    expect(cd2._title).to.be.equal("Hollow Knight OST");
  });
  it("cd2.songs is an array with song2, song3 and song4", () => {
    expect(cd2.songs).to.have.members([song2, song3, song4]);
  });
  it("cd2 includes 'Radiance'", () => {
    expect(cd2.songs.map(song => song._title)).to.include("Radiance");
  });
  it("cd2 includes 'Mantis Lords'", () => {
    expect(cd2.songs.map(song => song._title)).to.include("Mantis Lords");
  });
  it("cd2 includes 'Enter Hallownest'", () => {
    expect(cd2.songs.map(song => song._title)).to.include("Enter Hallownest");
  });
  it("All songs in cd2 are Soundtrack", () => {
    expect(cd2.songs.every(song => song.genres.includes("Soundtrack"))).to.be.true;
  });
  it("Not all songs in cd2 are Choral", () => {
    expect(cd2.songs.every(song => song.genres.includes("Choral"))).to.be.false;
  });
});

describe("Artist function tests", () => {
});

describe("MusicLibrary function tests", () => {
});
