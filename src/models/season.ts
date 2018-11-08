import * as fs from "fs";

export class Season {
  private name: string;
  private path: string;
  episodeCount: number = 0;

  constructor(name: string, path: string) {
    this.name = name;
    this.path = path;
    this.getEpisodeCount()
  }

  getEpisodeCount() {
    const path = require("path");
    let fullPath = path.join(this.path, this.name);
    let files = fs.readdirSync(fullPath);

    this.episodeCount = files.length;
  }
}
