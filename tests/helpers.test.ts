import { createAdventurerCards } from '../gameplay/helpers'
import { createLandscapeCards } from '../gameplay/helpers'
import { expect } from 'chai'

describe('helpers', () => {
    it('createAdventurerCards creates an array of adventurer cards', () => {
        const cards = createAdventurerCards()
        expect(cards.length).to.equal(60)
    })
})