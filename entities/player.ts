import { AdventurerCard, AdventurerCards } from "./advernture_cards";
import { DragonWoodCard, DragonWoodCards } from "./dragonwood_cards";

export class Player {
  private adventurerCardsHand: AdventurerCards = [];
  private dragonWoodCardsHand: DragonWoodCards = [];

  getHand() {
    return this.adventurerCardsHand;
  }

  addCardToDeck(adventurerCard: AdventurerCard) {
    this.adventurerCardsHand.push(adventurerCard);
  }

  addCardToDragonWoodDeck(dragonWoodCard: DragonWoodCard) {
    this.dragonWoodCardsHand.push(dragonWoodCard);
  }
}

export type Players = Array<Player>;
