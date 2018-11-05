const Movie = require('../dist/movie').Movie;

describe("Movie", function () {
  let movie = new Movie("Matrix.mkv");

  it("removes the file extension", function () {
    expect(movie.name).toEqual("Matrix")
  });
});
