import { Movie } from "./movie";

import * as fs from "fs";

export class MovieParser {
  private readonly path: string;

  constructor(path: string) {
    this.path = path;
  }

  parse(): Movie[] {
    let movies: Movie[] = [];
    let files = fs.readdirSync(this.path);

    for (let file of files) {
      let movie = new Movie(file);
      movies.push(movie);
    }

    return movies;
  }
}
