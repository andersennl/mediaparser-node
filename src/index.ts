import { MovieParser } from "./movieParser";
import { SeriesParser } from "./seriesParser";

let movieParser = new MovieParser();
let movies = movieParser.parse();

let seriesParser = new SeriesParser();
let series = seriesParser.parse();
