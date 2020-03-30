"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor() {
        this.deck = [];
    }
    addCardToDeck(adventurerCard) {
        this.deck.push(adventurerCard);
    }
}
exports.Player = Player;
