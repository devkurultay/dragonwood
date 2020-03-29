import {
    AdventurerCard,
    LuckyLadyBugCard,
    RegularCard
} from "../entities/advernture_cards";
import { Color } from "../entities/advernture_cards";
import { LandscapeCard } from "../entities/landscape_cards";

function createArrayOfNumbers(n: number): Array<number> {
    return Array.from(Array(n).keys())
}

export function createAdventurerCards (): Array<AdventurerCard> {
    const colors = Object.keys(Color)
    const numbers = createArrayOfNumbers(12)
    const cards: Array<AdventurerCard> = []
    numbers.forEach((num: number) => { 
        colors.forEach((color: string) => {
            cards.push(new RegularCard(color, num))
        })
    })
    const luckyLadybugNumbers = createArrayOfNumbers(4)
    luckyLadybugNumbers.forEach((num: number) => {
        cards.push(new LuckyLadyBugCard())
    })
    return cards
}