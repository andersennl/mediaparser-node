import { Season } from "../models/season";
import { Config } from "../models/config";
import * as fs from "fs";
const string = require('lodash/string');

export class SeasonParser {
  private readonly path: string;

  constructor(path: string) {
    this.path = path;
  }

  parse(): Season[] {
    const path = require("path");
    let fullPath = path.join(Config.seriesPath(), this.path);

    let seasons: Season[] = [];
    let files = fs.readdirSync(fullPath);
    let filtered_files = files.filter(file => !string.startsWith(file, "."));

    for (let file of filtered_files) {
      let season = new Season(file, fullPath);
      seasons.push(season);
    }

    return seasons;
  }
}
