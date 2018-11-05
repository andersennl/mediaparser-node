import { MovieParser } from "./movieParser";
import { SeriesParser } from "./seriesParser";

let moviesPath = "/Users/andersennl/iclouddrive/Coding/Node/mediaparser/media/testmovies";
let seriesPath = "/Users/andersennl/iclouddrive/Coding/Node/mediaparser/media/testseries";

let movieParser = new MovieParser(moviesPath);
let movies = movieParser.parse();

let seriesParser = new SeriesParser(seriesPath);
let series = seriesParser.parse();
