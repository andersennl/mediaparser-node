import * as fs from "fs";

export class Season {
  private name: string;
  private path: string;
  private episodeCount: number = 0;

  constructor(name: string, path: string) {
    this.name = name;
    this.path = path;
    this.parseEpisodeCount()
  }

  getEpisodeCount(): number {
    return this.episodeCount;
  }

  getName(): string {
    return this.name;
  }

  private parseEpisodeCount() {
    const path = require("path");
    let fullPath = path.join(this.path, this.name);
    let files = fs.readdirSync(fullPath);

    this.episodeCount = files.length;
  }
}
