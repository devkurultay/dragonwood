"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const advernture_cards_1 = require("../entities/advernture_cards");
const advernture_cards_2 = require("../entities/advernture_cards");
function createAdventurerCards() {
    const colors = Object.keys(advernture_cards_2.Color);
    const numbers = Array.from(Array(12).keys());
    const cards = [];
    numbers.forEach((num) => {
        colors.forEach((color) => {
            cards.push(new advernture_cards_1.AdventurerCard(color, num));
        });
    });
    return cards;
}
exports.createAdventurerCards = createAdventurerCards;
