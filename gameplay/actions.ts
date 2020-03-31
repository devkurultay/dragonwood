import { AdventurerCard } from '../entities/advernture_cards'
import { CapturableCard, DragonWoodCard } from '../entities/dragonwood_cards'
import { Player } from '../entities/player'
import { INITIAL_NUMBER_OF_ADV_CARDS } from '../common/constants'
import {
    createPlayers,
    createAdventurerCards,
    createDragonWoodCards
} from './helpers'

export function giveUserAdventurereCards(player: Player, adventurerCards: Array<AdventurerCard>) {
    adventurerCards.forEach((_: AdventurerCard, ind: number) => {
        if (INITIAL_NUMBER_OF_ADV_CARDS > ind) {
            const elem = adventurerCards.splice(ind, 1)
            player.addCardToDeck([...elem])
        }
    })
}

export function distributeAdventurerCards(players: Array<Player>, adventurerCards: Array<AdventurerCard>) {
    players.forEach((p: Player) => {
        giveUserAdventurereCards(p, adventurerCards)
    })
}

export class Game {
    players: Array<Player> = []
    landscape: Array<DragonWoodCard> = []
    deck: Array<AdventurerCard> = []

    constructor(numberOfPlayers: number) {
        this.players = createPlayers(4)
    }

    start() {
        this.landscape = createDragonWoodCards()
        const adventurerCards = createAdventurerCards()
        distributeAdventurerCards(this.players, adventurerCards)
        this.deck = adventurerCards
        const playersNum = this.players.length
        const playersPluralized = playersNum > 1
          ? 'players'
          : 'player'
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