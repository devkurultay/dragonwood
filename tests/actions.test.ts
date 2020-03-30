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

})