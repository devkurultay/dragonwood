"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../gameplay/helpers");
const chai_1 = require("chai");
describe('helpers', () => {
    it('createAdventurerCards creates an array of adventurer cards', () => {
        const cards = helpers_1.createAdventurerCards();
        chai_1.expect(cards.length).to.equal(64);
        chai_1.expect(cards[0].weight).to.equal(1);
    });
    it('createDragonWoodCards creates an array of dragonwood cards', () => {
        const cards = helpers_1.createDragonWoodCards();
        chai_1.expect(cards.length).to.equal(42);
    });
});
