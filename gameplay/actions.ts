import { AdventurerCard } from '../entities/advernture_cards'
import { CapturableCard } from '../entities/dragonwood_cards'
import { Player } from '../entities/player'
import { INITIAL_NUMBER_OF_ADV_CARDS } from '../common/constants'

export function distributeAdventurerCards(players: Array<Player>, adventurerCards: Array<AdventurerCard>) {
    return players.map((p: Player) => {
        for (let i = 0; i < INITIAL_NUMBER_OF_ADV_CARDS; i++) {
            p.addCardToDeck(adventurerCards[i])
        }
        return p
    })
}

class Movement {
    landscapeCard: CapturableCard
    advCards: Array<AdventurerCard>
    wayToCapture: string

    constructor (currentCard: CapturableCard, advCards: Array<AdventurerCard>, wayToCapture: string) {
        this.landscapeCard = currentCard
        this.advCards = advCards
        this.wayToCapture = wayToCapture
    }

    move() {
        const score = 3
        const isEnough = this.landscapeCard.isEnoughScoresToCapture(this.wayToCapture, score)
        if (isEnough) {
            // remove landscapeCard from deck and put it to user's deck
            console.log('Yes! the user got this card!')
        } else {
            console.log('No :( the user is going to be lucky next time!')
        }
    }
}