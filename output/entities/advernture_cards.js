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
}
exports.AdventurerCard = AdventurerCard;
class LuckyLadyBugCard extends AdventurerCard {
}
exports.LuckyLadyBugCard = LuckyLadyBugCard;
class RegularCard extends AdventurerCard {
    constructor(color, weight) {
        super();
        this.color = color;
        this.weight = weight;
    }
}
exports.RegularCard = RegularCard;
