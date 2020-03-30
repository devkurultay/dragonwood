import { AdventurerCard } from "./advernture_cards";

export class Player {
    deck: Array<AdventurerCard> = [];
    addCardToDeck(adventurerCard: AdventurerCard) {
        this.deck.push(adventurerCard)
    }
}