import { AdventurerCard } from "../entities/advernture_cards";
import { Color } from "../entities/advernture_cards";

export function createAdventurerCards (): Array<AdventurerCard> {
    const colors = Object.keys(Color)
    const numbers = Array.from(Array(12).keys())
    const cards: Array<AdventurerCard> = []
    numbers.forEach((num: number) => { 
        colors.forEach((color: string) => {
            cards.push(new AdventurerCard(color, num))
        })
    })
    return cards
}