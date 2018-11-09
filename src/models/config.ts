let path = require("path");
let JSONStore = require("json-store");

export class Config {
  static seriesPath(): string {
    let db = JSONStore(path.join(__dirname, "../../config.json"));
    return db.get("seriesPath")
  }

  static moviesPath(): string {
    let db = JSONStore(path.join(__dirname, "../../config.json"));
    return db.get("moviesPath");
  }
}
