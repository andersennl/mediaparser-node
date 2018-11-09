"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Movie {
    constructor(name) {
        this.name = name.replace(".mkv", "");
    }
    getName() {
        return this.name;
    }
}
exports.Movie = Movie;
//# sourceMappingURL=movie.js.map