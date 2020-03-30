"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createArrayOfNumbers(n, startFrom = 0) {
    if (startFrom > 0) {
        n = n + startFrom;
        return Array.from(Array(n).keys()).slice(startFrom);
    }
    return Array.from(Array(n).keys());
}
exports.createArrayOfNumbers = createArrayOfNumbers;
