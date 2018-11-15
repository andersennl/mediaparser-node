"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const movie_1 = require("../models/movie");
const config_1 = require("../models/config");
const fs = __importStar(require("fs"));
const string = require('lodash/string');
class MovieParser {
    parse() {
        let movies = [];
        let files = fs.readdirSync(config_1.Config.moviesPath());
        let filtered_files = files.filter(file => !string.startsWith(file, "."));
        for (let file of filtered_files) {
            let movie = new movie_1.Movie(file);
            movies.push(movie);
        }
        return movies;
    }
}
exports.MovieParser = MovieParser;
//# sourceMappingURL=movieParser.js.map