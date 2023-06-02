import { AdventurerCard, AdventurerCards } from "./advernture_cards";
import { DragonWoodCard, DragonWoodCards } from "./dragonwood_cards";

export class Player {
  deck: AdventurerCards = [];
  dragonWoodDeck: DragonWoodCards = [];

  addCardToDeck(adventurerCard: AdventurerCard) {
    this.deck.push(adventurerCard);
  }

  addCardToDragonWoodDeck(dragonWoodCard: DragonWoodCard) {
    this.dragonWoodDeck.push(dragonWoodCard);
  }
}

export type Players = Array<Player>;
