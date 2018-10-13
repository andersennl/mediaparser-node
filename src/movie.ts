export class Movie {
  private name: string;

  constructor(name: string) {
    this.name = name.replace(".mkv", "");
  }
}
