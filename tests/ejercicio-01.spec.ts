import "mocha";
import { expect } from "chai";

import { Song } from "../src/ejercicio-01/song";
import { CD } from "../src/ejercicio-01/cd";
import { Artist } from "../src/ejercicio-01/artist";
import { Band } from "../src/ejercicio-01/band";
import { MusicLibrary } from "../src/ejercicio-01/music-library";
import { BaseArtist } from "../src/ejercicio-01/base-artist";

const song1 = new Song("Blessed and Possessed", 290, false, 1900000, "Metal");
const song2 = new Song(
  "Mordekaiser, the Iron Revenant",
  168,
  false,
  2000000,
  "Metal",
  "Soundtrack"
);
const song3 = new Song(
  "Entre dos tierras",
  368,
  true,
  620000000,
  "Rock",
  "Pop",
  "Latin"
);
const song4 = new Song("Bad to the Bone", 290, true, 41000000, "Rock", "Blues");
const song5 = new Song(
  "Enter Hallownest",
  89,
  false,
  410000,
  "Orchestral",
  "Soundtrack"
);
const song6 = new Song(
  "Mantis Lords",
  105,
  false,
  567000,
  "Orchestral",
  "Soundtrack",
  "Choral"
);
const song7 = new Song(
  "Radiance",
  137,
  false,
  548000,
  "Orchestral",
  "Soundtrack",
  "Choral"
);
const song8 = new Song(
  "The World Revolving",
  102,
  false,
  6800000,
  "Soundtrack",
  "8-bit"
);
const song9 = new Song(
  "Big Shot",
  143,
  false,
  19000000,
  "Soundtrack",
  "8-bit"
);
const song10 = new Song(
  "Hopes and Dreams",
  182,
  false,
  25000000,
  "Soundtrack",
  "8-bit"
);
const song11 = new Song(
  "It's Raining Somewhere Else",
  171,
  false,
  6600000,
  "Soundtrack",
  "8-bit"
);
const song12 = new Song(
  "Death by Glamour",
  135,
  false,
  23000000,
  "Soundtrack",
  "8-bit"
);

const cd1 = new CD("Bad to the Bone", 1987, song4);
const cd2 = new CD("Hollow Knight OST", 2017, song5, song6, song7);
const cd3 = new CD("Blessed and Possessed", 2015, song1);
const cd4 = new CD("Undertale OST", 2015, song10, song11, song12);
const cd5 = new CD("Deltarune OST", 2018, song8, song9);

const artist1 = new Artist("Christopher Larkin", 500000, cd2);
const artist2 = new Artist("Toby Fox", 1000000, cd4, cd5);

const band1 = new Band("Powerwolf", 1000000, cd3);

const music_library1 = new MusicLibrary("Geek Music", artist1, artist2, band1);

describe("Song class tests", () => {
  it("song1.title is 'Blessed and Possessed'", () => {
    expect(song1.title).to.be.equal("Blessed and Possessed");
  });
  it("song1.duration is 290 segs", () => {
    expect(song1.duration).to.be.equal(290);
  });
  it("song1.single is false", () => {
    expect(song1.single).to.be.equal(false);
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
    expect(
      song1.genres.includes("Metal") && song2.genres.includes("Metal")
    ).to.be.equal(true);
  });
  it("song1.AddGenre('Rock') adds Rock to song1.genres", () => {
    song1.addGenre("Rock");
    expect(song1.genres).to.have.members(["Rock", "Metal"]);
  });
  it("song3 is a single", () => {
    expect(song3.single).to.be.equal(true);
  });
  it("song3.incrementReproductions() adds 1 to song3.reproductions", () => {
    song3.incrementReproductions();
    expect(song3.reproductions).to.be.equal(620000001);
  });
  it("song3.genres = ['Rock', 'Pop', 'Latin']", () => {
    expect((song3.genres = ["Rock", "Pop", "Latin"])).to.have.members([
      "Rock",
      "Pop",
      "Latin",
    ]);
  });
  it("song3.reproductions = 650000000", () => {
    expect((song3.reproductions = 650000000)).to.be.equal(650000000);
  });
});

describe("CD class tests", () => {
  it("cd1.title is 'Bad to the Bone'", () => {
    expect(cd1.title).to.be.equal("Bad to the Bone");
  });
  it("cd1._year is 1987", () => {
    expect(cd1.year).to.be.equal(1987);
  });
  it("cd1.songs is an array with song4", () => {
    expect(cd1.songs).to.have.members([song4]);
  });
  it("cd2.title is 'Hollow Knight OST'", () => {
    expect(cd2.title).to.be.equal("Hollow Knight OST");
  });
  it("cd2.songs is an array with song5, song6 and song7", () => {
    expect(cd2.songs).to.have.members([song5, song6, song7]);
  });
  it("cd2 includes 'Radiance'", () => {
    expect(cd2.songs.map((song) => song.title)).to.include("Radiance");
  });
  it("cd2 includes 'Mantis Lords'", () => {
    expect(cd2.songs.map((song) => song.title)).to.include("Mantis Lords");
  });
  it("cd2 includes 'Enter Hallownest'", () => {
    expect(cd2.songs.map((song) => song.title)).to.include("Enter Hallownest");
  });
  it("All songs in cd2 are Soundtrack", () => {
    expect(cd2.songs.every((song) => song.genres.includes("Soundtrack"))).to.be
      .true;
  });
  it("Not all songs in cd2 are Choral", () => {
    expect(cd2.songs.every((song) => song.genres.includes("Choral"))).to.be
      .false;
  });
  it("cd2.songs = [song6, song7]", () => {
    expect((cd2.songs = [song6, song7])).to.have.members([song6, song7]);
  });
  it("cd2.addSong(song4) adds song4 to cd2.songs", () => {
    cd2.addSong(song4);
    expect(cd2.songs).to.have.members([song6, song7, song4]);
  });
});

describe("Artist class tests", () => {
  it("artist1.name is 'Christopher Larkin'", () => {
    expect(artist1.name).to.be.equal("Christopher Larkin");
  });
  it("artist1._monthlyListeners is 500K", () => {
    expect(artist1.monthlyListeners).to.be.equal(500000);
  });
  it("Christopher Larkin is the composer of Hollow Knight OST", () => {
    expect(artist1.discography.includes(cd2)).to.be.true;
  });
  it("artist1.discography = [cd1, cd2] adds CD1 to Christopher Larkin", () => {
    expect((artist1.discography = [cd1, cd2])).to.have.members([cd1, cd2]);
  });
});

describe("Band class tests", () => {
  it("band1.name is 'Powerwolf'", () => {
    expect(band1.name).to.be.equal("Powerwolf");
  });
  it("band1._monthlyListeners is 1M", () => {
    expect(band1.monthlyListeners).to.be.equal(1000000);
  });
  it("band1.discography is an array with cd3", () => {
    expect(band1.discography).to.have.members([cd3]);
  });
  it("band1.addCD(cd1) adds cd1 to band1.discography", () => {
    band1.addCD(cd1);
    expect(band1.discography).to.have.members([cd3, cd1]);
  });
  it("band1.monthlyListeners = 2000000 sets listeners to 2000000", () => {
    expect((band1.monthlyListeners = 2000000)).to.be.equal(2000000);
  });
});

describe("MusicLibrary class tests", () => {
  it("music_library1.name is 'Geek Music'", () => {
    expect(music_library1.name).to.be.equal("Geek Music");
  });
  it("Toby Fox and Christopher Larkin are in music_library1", () => {
    expect(music_library1.artists).to.include(artist1);
    expect(music_library1.artists).to.include(artist2);
  });
  it("music_library1 has 8-bit music", () => {
    expect(
      music_library1.artists.some((artist) =>
        artist.discography.some((cd) =>
          cd.songs.some((song) => song.genres.includes("8-bit"))
        )
      )
    ).to.be.true;
  });
  it("music_library1.searchByArtist('Christopher Larkin') returns the artist info", () => {
    expect(music_library1.searchArtist("Christopher Larkin")).to.be.equal(
      artist1
    );
  });
  it("music_library1.searchByArtist('Toby Fox') returns the artist info", () => {
    expect(music_library1.searchArtist("Toby Fox")).to.be.equal(artist2);
  });
  it("music_library1.searchByArtist('Mick Gordon') returns false", () => {
    expect(music_library1.searchArtist("Mick Gordon")).to.be.false;
  });
  it("music_library1.searchSong('Radiance') returns the song info", () => {
    expect(music_library1.searchSong("Radiance")).to.be.equal(song7);
  });
  it("music_library1.searchSong('Entre dos tierras') returns false", () => {
    expect(music_library1.searchSong("Entre dos tierras")).to.be.false;
  });
  it("music_library1.searchCD('Hollow Knight OST') returns the CD info", () => {
    expect(music_library1.searchCD("Hollow Knight OST")).to.be.equal(cd2);
  });
  it("music_library1.searchCD('Dark Souls 3 OST') returns false", () => {
    expect(music_library1.searchCD("Dark Souls 3 OST")).to.be.false;
  });
  it("music_library1.name = 'Metal Music' sets name to 'Metal Music'", () => {
    expect((music_library1.name = "Metal Music")).to.be.equal("Metal Music");
  });
  it("music_library1.artists = [band1] sets artists to [band1]", () => {
    expect((music_library1.artists = [band1])).to.have.members([band1]);
  });
  it("music_library1.showInfo() returns the name of the library and its artists", () => {
    expect(music_library1.showInfo()).to.be.equal(
      `Nombre de la biblioteca: ${music_library1.name}` +
        "\n" +
        `Artistas: ${music_library1.artists
          .map((artist) => artist.name)
          .join(", ")}`
    );
  });
  it("music_library1.countSongsInDisc('Blessed and Possessed') returns 1", () => {
    expect(
      music_library1.countSongsInDisc("Blessed and Possessed")
    ).to.be.equal(1);
  });
  it("music_library1.countSongsInDisc('Hollow Knight OST') returns 0", () => {
    expect(music_library1.countSongsInDisc("Hollow Knight OST")).to.be.equal(0);
  });
  it('music_library1.calculateCDDuration("Blessed and Possessed") returns 290 segs', () => {
    expect(music_library1.calculateCDDuration("Blessed and Possessed")).to.be.equal(290);
  });
  it('music_library1.calculateCDDuration("Hollow Knight OST") returns 0', () => {
    expect(music_library1.calculateCDDuration("Hollow Knight OST")).to.be.equal(0);
  });
  it('music_library1.calculateCDReproductions("Blessed and Possessed") returns 1900000', () => {
    expect(music_library1.calculateCDReproductions("Blessed and Possessed")).to.be.equal(1900000);
  });
  it('music_library1.calculateCDReproductions("Hollow Knight OST") returns 0', () => {
    expect(music_library1.calculateCDReproductions("Hollow Knight OST")).to.be.equal(0);
  });
});