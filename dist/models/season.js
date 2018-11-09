"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
class Season {
    constructor(name, path) {
        this.episodeCount = 0;
        this.name = name;
        this.path = path;
        this.parseEpisodeCount();
    }
    getEpisodeCount() {
        return this.episodeCount;
    }
    getName() {
        return this.name;
    }
    parseEpisodeCount() {
        const path = require("path");
        let fullPath = path.join(this.path, this.name);
        let files = fs.readdirSync(fullPath);
        this.episodeCount = files.length;
    }
}
exports.Season = Season;
//# sourceMappingURL=season.js.map