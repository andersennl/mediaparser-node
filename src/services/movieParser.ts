import { Movie } from "../models/movie";
import { Config } from "../models/config";
import * as fs from "fs";

export class MovieParser {
  parse(): Movie[] {
    let movies: Movie[] = [];
    let files = fs.readdirSync(Config.moviesPath());
    let filtered_files = files.filter(file => !file.match(/\./));

    for (let file of filtered_files) {
      let movie = new Movie(file);
      movies.push(movie);
    }

    return movies;
  }
}
