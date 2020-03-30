"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const actions_1 = require("../gameplay/actions");
const player_1 = require("../entities/player");
const helpers_1 = require("../gameplay/helpers");
describe('actions', () => {
    it('should distribute 5 adventurer cards to each player', () => {
        const players = [
            new player_1.Player(),
            new player_1.Player()
        ];
        const adventurerCards = helpers_1.createAdventurerCards();
        const playersWithCards = actions_1.distributeAdventurerCards(players, adventurerCards);
        playersWithCards.forEach((p) => {
            chai_1.expect(p.deck.length).to.equal(5);
        });
    });
});
