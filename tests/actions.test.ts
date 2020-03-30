import { expect } from 'chai'
import { Game } from '../gameplay/actions'
import { Player } from '../entities/player'

describe('Game', () => {
    it('should start game', () => {
        const numberOfPlayers = 4
        const game = new Game(numberOfPlayers)
        expect(game.start()).to.equal('Game started with 4 players.')
        expect(game.players.length).to.equal(numberOfPlayers)
        game.players.forEach((p: Player) => {
            expect(p.deck.length).to.equal(5)
        })
    })
    it('should have cards in its Landscape', () => {
        const numberOfPlayers = 4
        const game = new Game(numberOfPlayers)
        expect(game.landscape.length).to.equal(0)
        game.start()
        expect(game.landscape.length).to.be.greaterThan(0)
    })
})