"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let express = require("express");
let path = require("path");
const movieParser_1 = require("./services/movieParser");
const seriesParser_1 = require("./services/seriesParser");
let app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));
app.use('/static', express.static('static'));
app.disable("etag");
let movieParser = new movieParser_1.MovieParser();
let seriesParser = new seriesParser_1.SeriesParser();
app.get("/", (req, res) => {
    let movies = movieParser.parse();
    let series = seriesParser.parse();
    res.render('pages/index', { movies: movies, series: series });
});
app.listen(80, () => {
    console.log("Express started");
});
//# sourceMappingURL=app.js.map