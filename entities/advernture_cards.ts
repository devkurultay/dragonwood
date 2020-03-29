enum Color {
    Blue = 'blue',
    Red = 'red',
    Orange = 'orange',
    Violet = 'violet',
    Green = 'green'
}

export class AdventureCard {
    color: string
    weight: number
    constructor(color: string, weight: number) {
        this.color = color
        this.weight = weight
    }
}