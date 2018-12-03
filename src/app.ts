let express = require("express");
let path = require("path");

import { MovieParser } from "./services/movieParser";
import { SeriesParser } from "./services/seriesParser";
import { Request, Response } from "express";

let app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));
app.use('/static', express.static('static'));
app.disable("etag");

app.get("/", (req: Request, res: Response) => {
  let movieParser = new MovieParser();
  let movies = movieParser.parse();

  let seriesParser = new SeriesParser();
  let series = seriesParser.parse();

  res.render('pages/index', { movies: movies, series: series });
});

app.listen(80, () => {
  console.log("Express started");
});
