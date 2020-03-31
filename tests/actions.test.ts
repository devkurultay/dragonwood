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
    it('should have Dragonwood cards in its Dragonwood cards deck', () => {
        const numberOfPlayers = 4
        const game = new Game(numberOfPlayers)
        expect(game.dragonWoodCardsDeck.length).to.equal(0)
        game.start()
        expect(game.dragonWoodCardsDeck.length).to.be.greaterThan(0)
    })
    it('should have Adventurer cards in its Adventurer cards Deck', () => {
        const numberOfPlayers = 4
        const expectedNumberOfAdventurerCardsInDeck = 64 - (4 * 5)
        const game = new Game(numberOfPlayers)
        expect(game.adventurerCardsdeck.length).to.equal(0)
        game.start()
        expect(game.adventurerCardsdeck.length).to.be.equal(expectedNumberOfAdventurerCardsInDeck)
    })
})

describe('Helper functions', () => {
    it('giveInitialAdventurerCardsToUser gives a user 5 adventurer cards', () => {
        const player = new Player()
        const adventurerCards = createAdventurerCards()
        expect(adventurerCards.length).to.equal(64)
        giveInitialAdventurerCardsToUser(player, adventurerCards)
        expect(player.deck.length).to.equal(5)
        expect(adventurerCards.length).to.equal(59)
    })
})