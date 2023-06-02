import {
  createAdventurerCards,
  createDragonWoodCards,
  rollDice,
} from "../gameplay/helpers";
import { giveUserAdventurerCards as giveInitialAdventurerCardsToUser } from "../gameplay/actions";
import { expect } from "chai";
import { RegularCard } from "../entities/advernture_cards";
import { Player } from "../entities/player";

describe("helpers", () => {
  // TODO: test createAdventurerCards extensively
  it("createAdventurerCards creates an array of adventurer cards", () => {
    const cards = createAdventurerCards();
    expect(cards.length).to.equal(64);
    expect((cards[0] as RegularCard).weight).to.equal(1);
  });

  it("createDragonWoodCards creates an array of dragonwood cards", () => {
    const cards = createDragonWoodCards();
    expect(cards.length).to.equal(42);
  });

  it("giveInitialAdventurerCardsToUser gives a user 5 adventurer cards", () => {
    const player = new Player();
    const adventurerCards = createAdventurerCards();
    expect(adventurerCards.length).to.equal(64);
    giveInitialAdventurerCardsToUser(player, adventurerCards);
    expect(player.deck.length).to.equal(5);
    expect(adventurerCards.length).to.equal(59);
  });

  it("rollDice should return a number between 1 and 5 exlusive", () => {
    const diceRoll = rollDice();
    expect(diceRoll).to.be.greaterThan(0);
    expect(diceRoll).to.be.lessThan(5);
  });
});
