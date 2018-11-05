import { Movie } from "./movie";
import  {MovieParser } from "./movieParser";

let moviesPath = "/Users/andersennl/iclouddrive/Coding/Node/mediaparser/media/testmovies";
let seriesPath = "/Users/andersennl/iclouddrive/Coding/Node/mediaparser/media/testseries";

let parser = new MovieParser(moviesPath);
let movies = parser.parseMovies();
