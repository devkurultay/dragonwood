import { AdventurerCard } from '../entities/advernture_cards'
import { CapturableCard } from '../entities/dragonwood_cards'
import { Player } from '../entities/player'
import { INITIAL_NUMBER_OF_ADV_CARDS } from '../common/constants'
import {
    createPlayers,
    createAdventurerCards
} from './helpers'

export function distributeAdventurerCards(players: Array<Player>, adventurerCards: Array<AdventurerCard>) {
    return players.map((p: Player) => {
        for (let i = 0; i < INITIAL_NUMBER_OF_ADV_CARDS; i++) {
            p.addCardToDeck(adventurerCards[i])
        }
        return p
    })
}

export class Game {
    players: Array<Player> = []

    constructor(numberOfPlayers: number) {
        this.players = createPlayers(4)
    }

    start() {
        const playersNum = this.players.length
        const playersPluralized = playersNum > 1
          ? 'players'
          : 'player'
        const adventurerCards = createAdventurerCards()
        distributeAdventurerCards(this.players, adventurerCards)
        return `Game started with ${playersNum} ${playersPluralized}.`
    }
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