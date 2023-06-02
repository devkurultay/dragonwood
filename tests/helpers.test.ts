import {
  createAdventurerCards,
  createDragonWoodCards,
} from "../gameplay/helpers";
import { expect } from "chai";
import { RegularCard } from "../entities/advernture_cards";

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
});
