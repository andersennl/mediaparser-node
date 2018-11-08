export class Movie {
  private readonly name: string;

  constructor(name: string) {
    this.name = name.replace(".mkv", "");
  }

  getName(): string {
    return this.name;
  }
}
