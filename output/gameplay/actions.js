"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../common/constants");
function distributeAdventurerCards(players, adventurerCards) {
    return players.map((p) => {
        for (let i = 0; i < constants_1.INITIAL_NUMBER_OF_ADV_CARDS; i++) {
            p.addCardToDeck(adventurerCards[i]);
        }
        return p;
    });
}
exports.distributeAdventurerCards = distributeAdventurerCards;
class Movement {
    constructor(currentCard, advCards, wayToCapture) {
        this.landscapeCard = currentCard;
        this.advCards = advCards;
        this.wayToCapture = wayToCapture;
    }
    move() {
        const score = 3;
        const isEnough = this.landscapeCard.isEnoughScoresToCapture(this.wayToCapture, score);
        if (isEnough) {
            // remove landscapeCard from deck and put it to user's deck
            console.log('Yes! the user got this card!');
        }
        else {
            console.log('No :( the user is going to be lucky next time!');
        }
    }
}
