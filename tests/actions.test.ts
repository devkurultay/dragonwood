import { expect } from "chai";
import {
  Game,
  giveUserAdventurerCards as giveInitialAdventurerCardsToUser,
} from "../gameplay/actions";
import { Player } from "../entities/player";
import {
  createAdventurerCards,
  createDragonWoodCards,
} from "../gameplay/helpers";
import { EventCard, EventType } from "../entities/dragonwood_cards";

describe("Game", () => {
  it("should start game", () => {
    const numberOfPlayers = 4;
    const game = new Game(numberOfPlayers);
    expect(game.start()).to.equal("Game started with 4 players.");
    expect(game.players.length).to.equal(numberOfPlayers);
  });
  it("should have Dragonwood cards in its Dragonwood cards deck", () => {
    const numberOfPlayers = 4;
    const game = new Game(numberOfPlayers);
    expect(game.dragonWoodCardsDeck.length).to.equal(0);
    game.start();
    expect(game.dragonWoodCardsDeck.length).to.be.greaterThan(0);
  });
  it("should have 5 Dragonwood cards in its Landscape", () => {
    const game = new Game(1);
    expect(game.landscape.length).to.equal(0);
    game.start();
    expect(game.landscape.length).to.equal(5);
    const expectedNumberOfDragonWoodCards = createDragonWoodCards().length - 5;
    expect(game.dragonWoodCardsDeck.length).to.equal(
      expectedNumberOfDragonWoodCards
    );
  });
  it("should have Adventurer cards in its Adventurer cards Deck", () => {
    const numberOfPlayers = 4;
    const expectedNumberOfAdventurerCardsInDeck = 64 - 4 * 5;
    const game = new Game(numberOfPlayers);
    expect(game.adventurerCardsdeck.length).to.equal(0);
    game.start();
    expect(game.adventurerCardsdeck.length).to.be.equal(
      expectedNumberOfAdventurerCardsInDeck
    );
  });
  it("should remove event cards from landscape when initialized", () => {
    const eventCards = Array.from(Array(10)).map(
      () => new EventCard("one", "instruction", EventType.DiscardOneAdvCard)
    );
    const game = new Game(2);
    game.start();
    game.landscape = eventCards;
  });
});

describe("Helper functions", () => {
  it("giveInitialAdventurerCardsToUser gives a user 5 adventurer cards", () => {
    const player = new Player();
    const adventurerCards = createAdventurerCards();
    expect(adventurerCards.length).to.equal(64);
    giveInitialAdventurerCardsToUser(player, adventurerCards);
    expect(player.deck.length).to.equal(5);
    expect(adventurerCards.length).to.equal(59);
  });
});
