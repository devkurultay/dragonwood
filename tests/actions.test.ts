import { expect } from 'chai'
import {
    Game,
    giveUserAdventurereCards as giveInitialAdventurerCardsToUser
} from '../gameplay/actions'
import { Player } from '../entities/player'
import { AdventurerCard, LuckyLadyBugCard } from '../entities/advernture_cards'
import { createAdventurerCards } from '../gameplay/helpers'

describe('Game', () => {
    it('should start game', () => {
        const numberOfPlayers = 4
        const game = new Game(numberOfPlayers)
        expect(game.start()).to.equal('Game started with 4 players.')
        expect(game.players.length).to.equal(numberOfPlayers)
    })
    it('should have Dragonwood cards in its Landscape', () => {
        const numberOfPlayers = 4
        const game = new Game(numberOfPlayers)
        expect(game.landscape.length).to.equal(0)
        game.start()
        expect(game.landscape.length).to.be.greaterThan(0)
    })
    it('should have Adventurer cards in its Deck', () => {
        const numberOfPlayers = 4
        const expectedNumberOfAdventurerCardsInDeck = 64 - (4 * 5)
        const game = new Game(numberOfPlayers)
        expect(game.deck.length).to.equal(0)
        game.start()
        expect(game.deck.length).to.be.equal(expectedNumberOfAdventurerCardsInDeck)
    })
})

describe('Helper functions', () => {
    it('giveUserAdventurereCards gives a user 5 adventurer cards', () => {
        const player = new Player()
        const adventurerCards = createAdventurerCards()
        expect(adventurerCards.length).to.equal(64)
        giveInitialAdventurerCardsToUser(player, adventurerCards)
        expect(player.deck.length).to.equal(5)
        expect(adventurerCards.length).to.equal(59)
    })
})