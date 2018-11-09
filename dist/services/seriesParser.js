"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const series_1 = require("../models/series");
const config_1 = require("../models/config");
const fs = __importStar(require("fs"));
class SeriesParser {
    parse() {
        let series = [];
        let files = fs.readdirSync(config_1.Config.seriesPath());
        let filtered_files = files.filter(file => !file.match(/\./));
        for (let file of filtered_files) {
            let serie = new series_1.Series(file);
            series.push(serie);
        }
        return series;
    }
}
exports.SeriesParser = SeriesParser;
//# sourceMappingURL=seriesParser.js.map