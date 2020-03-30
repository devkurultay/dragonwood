import { expect } from 'chai'
import {
    distributeAdventurerCards
} from '../gameplay/actions'
import { Player } from '../entities/player'
import { createAdventurerCards } from '../gameplay/helpers'

describe('actions', () => {
    it('should distribute 5 adventurer cards to each player', () => {
        const players = [
            new Player(),
            new Player()
        ]
        const adventurerCards = createAdventurerCards()
        const playersWithCards = distributeAdventurerCards(players, adventurerCards)
        playersWithCards.forEach((p: Player) => {
            expect(p.deck.length).to.equal(5)
        })
    })
})