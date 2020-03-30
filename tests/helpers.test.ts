import {
    createAdventurerCards,
    createDragonWoodCards
} from '../gameplay/helpers'
import { expect } from 'chai'

describe('helpers', () => {
    it('createAdventurerCards creates an array of adventurer cards', () => {
        const cards = createAdventurerCards()
        expect(cards.length).to.equal(64)
    })

    it('createDragonWoodCards creates an array of dragonwood cards', () => {
        const cards = createDragonWoodCards()
        expect(cards.length).to.equal(42)
    })
})