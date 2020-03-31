import { AdventurerCard } from "./advernture_cards";
import { DragonWoodCard } from "./dragonwood_cards";

export class Player {
    deck: Array<AdventurerCard> = []
    dragonWoodDeck: Array<DragonWoodCard> = []

    addCardToDeck(adventurerCard: AdventurerCard) {
        this.deck.push(adventurerCard)
    }

    addCardToDragonWoodDeck(dragonWoodCard: DragonWoodCard) {
        this.dragonWoodDeck.push(dragonWoodCard)
    }
}