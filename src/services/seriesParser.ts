import { Series } from "../models/series";
import { Config } from "../models/config";
import * as fs from "fs";
const string = require('lodash/string');

export class SeriesParser {
  parse(): Series[] {
    let series: Series[] = [];
    let files = fs.readdirSync(Config.seriesPath());
    let filtered_files = files.filter(file => !string.startsWith(file, "."));

    for (let file of filtered_files) {
      let serie = new Series(file);
      series.push(serie);
    }

    return series;
  }
}
