"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const season_1 = require("../models/season");
const config_1 = require("../models/config");
const fs = __importStar(require("fs"));
class SeasonParser {
    constructor(path) {
        this.path = path;
    }
    parse() {
        const path = require("path");
        let fullPath = path.join(config_1.Config.seriesPath(), this.path);
        let seasons = [];
        let files = fs.readdirSync(fullPath);
        let filtered_files = files.filter(file => !file.match(/\./));
        for (let file of filtered_files) {
            let season = new season_1.Season(file, fullPath);
            seasons.push(season);
        }
        return seasons;
    }
}
exports.SeasonParser = SeasonParser;
//# sourceMappingURL=seasonParser.js.map