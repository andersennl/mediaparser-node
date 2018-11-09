"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let path = require("path");
let JSONStore = require("json-store");
class Config {
    static seriesPath() {
        let db = JSONStore(path.join(__dirname, "../../config.json"));
        return db.get("seriesPath");
    }
    static moviesPath() {
        let db = JSONStore(path.join(__dirname, "../../config.json"));
        return db.get("moviesPath");
    }
}
exports.Config = Config;
//# sourceMappingURL=config.js.map