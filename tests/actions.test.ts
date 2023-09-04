import { expect } from "chai";
import sinon from "sinon";
import { Game } from "../gameplay/actions";
import * as gameplayHelpers from "../gameplay/helpers";
import { EventCard, EventType } from "../entities/dragonwood_cards";

describe("Game", () => {
  it("should start game", () => {
    const numberOfPlayers = 4;
    const game = new Game(numberOfPlayers);
    // TODO: check if start method is called
    expect(game.players.length).to.equal(numberOfPlayers);
  });
  it("should have Dragonwood cards in its Dragonwood cards deck", () => {
    const numberOfPlayers = 4;
    const game = new Game(numberOfPlayers);
    expect(game.dragonWoodCardsDeck.length).to.equal(0);
    expect(game.dragonWoodCardsDeck.length).to.be.greaterThan(0);
  });
  it("should have 5 Dragonwood cards in its Landscape", () => {
    const game = new Game(1);
    expect(game.landscape.length).to.equal(0);
    expect(game.landscape.length).to.equal(5);
    const expectedNumberOfDragonWoodCards =
      gameplayHelpers.createDragonWoodCards().length - 5;
    expect(game.dragonWoodCardsDeck.length).to.equal(
      expectedNumberOfDragonWoodCards
    );
  });
  it("should have Adventurer cards in its Adventurer cards Deck", () => {
    const numberOfPlayers = 4;
    const expectedNumberOfAdventurerCardsInDeck = 64 - 4 * 5;
    const game = new Game(numberOfPlayers);
    expect(game.adventurerCardsDeck.length).to.equal(0);
    expect(game.adventurerCardsDeck.length).to.be.equal(
      expectedNumberOfAdventurerCardsInDeck
    );
  });
  it("should remove event cards from landscape when initialized", () => {
    const eventCards = Array.from(Array(10)).map(
      () => new EventCard("one", "instruction", EventType.DiscardOneAdvCard)
    );
    const game = new Game(2);
    game.landscape = eventCards;
  });
  it("rollDice method calls rollDice helper for each dice", function () {
    const game = new Game(1);
    const numberOfPieces = 3;

    const rollDiceStub = sinon.stub(gameplayHelpers, "rollDice");
    rollDiceStub.returns(1);

    expect(game.rollDice(numberOfPieces)).to.equal(numberOfPieces);

    rollDiceStub.restore();
  });
  it.only("move()", function () {
    const game = new Game(3);
    game.move();
  });
});
