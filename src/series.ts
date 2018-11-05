import { Season } from "./season";
import { SeasonParser } from "./seasonParser";

export class Series {
  private readonly path: string;
  private seasons: Season[] = [];

  constructor(name: string) {
    this.path = name;
    this.seasons = this.parseSeasons();
  }

  getName(): string {
    return this.path;
  }

  getSeasonCount(): number {
    return this.seasons.length;
  }

  getSeasons(): Season[] {
    return this.seasons;
  }

  private parseSeasons(): Season[] {
    let parser = new SeasonParser(this.path);
    return parser.parse();
  }
}
