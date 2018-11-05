import * as fs from "fs";

export class EpisodeParser {
  private readonly path: string;
  private episodes = 0;

  constructor(path: string) {
    this.path = path;
  }

  parse(): number {
    let episodes = fs.readdirSync(this.path);
    return episodes.length;
  }
}
