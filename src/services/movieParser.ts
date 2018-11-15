import { Movie } from "../models/movie";
import { Config } from "../models/config";
import * as fs from "fs";
const string = require('lodash/string');

export class MovieParser {
  parse(): Movie[] {
    let movies: Movie[] = [];
    let files = fs.readdirSync(Config.moviesPath());
    let filtered_files = files.filter(file => !string.startsWith(file, "."));

    for (let file of filtered_files) {
      let movie = new Movie(file);
      movies.push(movie);
    }

    return movies;
  }
}
