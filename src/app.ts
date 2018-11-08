let express = require("express");
let path = require("path");

import { MovieParser } from "./services/movieParser";
import { SeriesParser } from "./services/seriesParser";
import { Request, Response } from "express";

let app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));
app.use(express.static(__dirname + "../src/assets"));

let movieParser = new MovieParser();
let movies = movieParser.parse();

let seriesParser = new SeriesParser();
let series = seriesParser.parse();

app.get("/", (req: Request, res: Response) => {
  res.render('pages/index', { movies: movies });
});

app.listen(3200, () => {
  console.log("Express started");
});
