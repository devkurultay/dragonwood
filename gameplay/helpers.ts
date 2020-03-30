import {
    AdventurerCard,
    LuckyLadyBugCard,
    RegularCard
} from "../entities/advernture_cards"
import {
    EnhancementCards,
    EventCards,
    CreatureCards
} from '../entities/constants'
import {
    createArrayOfNumbers
} from '../common/utils'
import { Color } from "../entities/advernture_cards"
import { DragonWoodCard } from "../entities/dragonwood_cards"

export function createAdventurerCards (): Array<AdventurerCard> {
    const colors = Object.keys(Color)
    const numbers = createArrayOfNumbers(12, 1)
    const cards: Array<AdventurerCard> = []
    numbers.forEach((num: number) => { 
        colors.forEach((color: string) => {
            cards.push(new RegularCard(color, num))
        })
    })
    const luckyLadybugNumbers = createArrayOfNumbers(4)
    luckyLadybugNumbers.forEach((_: number) => {
        cards.push(new LuckyLadyBugCard())
    })
    return cards
}

export function createDragonWoodCards(): Array<DragonWoodCard> {
    return [...EnhancementCards, ...EventCards, ...CreatureCards]
}