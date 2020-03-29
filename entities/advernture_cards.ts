export enum Color {
    Blue = 'Blue',
    Red = 'Red',
    Orange = 'Orange',
    Violet = 'Violet',
    Green = 'Green'
}

export class AdventurerCard {
    color: string
    weight: number
    constructor(color: string, weight: number) {
        this.color = color
        this.weight = weight
    }
}