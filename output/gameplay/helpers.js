"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const advernture_cards_1 = require("../entities/advernture_cards");
const constants_1 = require("../entities/constants");
const utils_1 = require("../common/utils");
const advernture_cards_2 = require("../entities/advernture_cards");
function createAdventurerCards() {
    const colors = Object.keys(advernture_cards_2.Color);
    const numbers = utils_1.createArrayOfNumbers(12, 1);
    const cards = [];
    numbers.forEach((num) => {
        colors.forEach((color) => {
            cards.push(new advernture_cards_1.RegularCard(color, num));
        });
    });
    const luckyLadybugNumbers = utils_1.createArrayOfNumbers(4);
    luckyLadybugNumbers.forEach((_) => {
        cards.push(new advernture_cards_1.LuckyLadyBugCard());
    });
    return cards;
}
exports.createAdventurerCards = createAdventurerCards;
function createDragonWoodCards() {
    return [...constants_1.EnhancementCards, ...constants_1.EventCards, ...constants_1.CreatureCards];
}
exports.createDragonWoodCards = createDragonWoodCards;
