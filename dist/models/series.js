"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seasonParser_1 = require("../services/seasonParser");
class Series {
    constructor(name) {
        this.seasons = [];
        this.path = name;
        this.seasons = this.parseSeasons();
    }
    getName() {
        return this.path;
    }
    getSeasons() {
        return this.seasons;
    }
    parseSeasons() {
        let parser = new seasonParser_1.SeasonParser(this.path);
        return parser.parse();
    }
}
exports.Series = Series;
//# sourceMappingURL=series.js.map