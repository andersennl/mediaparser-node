import { Movie } from "./movie";
import { Config } from "./config";
import * as fs from "fs";

export class MovieParser {
  parse(): Movie[] {
    let movies: Movie[] = [];
    let files = fs.readdirSync(Config.moviesPath());

    for (let file of files) {
      let movie = new Movie(file);
      movies.push(movie);
    }

    return movies;
  }
}
