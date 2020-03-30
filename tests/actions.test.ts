import { expect } from 'chai'
import {
    distributeAdventurerCards,
    Game
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
    it('should start game', () => {
        const numberOfPlayers = 4
        const game = new Game(numberOfPlayers)
        expect(game.start()).to.equal('Game started with 4 players.')
        expect(game.players.length).to.equal(numberOfPlayers)
    })
})