"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color;
(function (Color) {
    Color["Blue"] = "Blue";
    Color["Red"] = "Red";
    Color["Orange"] = "Orange";
    Color["Violet"] = "Violet";
    Color["Green"] = "Green";
})(Color = exports.Color || (exports.Color = {}));
class AdventurerCard {
    constructor(color, weight) {
        this.color = color;
        this.weight = weight;
    }
}
exports.AdventurerCard = AdventurerCard;
