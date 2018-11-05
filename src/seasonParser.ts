import { Season } from "./season";
import { Config } from "./config";
import * as fs from "fs";

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

    for (let file of files) {
      let season = new Season(file, fullPath);
      seasons.push(season);
    }

    return seasons;
  }
}
