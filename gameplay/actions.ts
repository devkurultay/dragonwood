import { AdventurerCard } from '../entities/advernture_cards'
import { CapturableCard } from '../entities/landscape_cards'

class Movement {
    landscapeCard: CapturableCard
    advCards: Array<AdventurerCard>
    wayToCapture: string

    constructor (currentCard: CapturableCard, advCards: Array<AdventurerCard>, wayToCapture: string) {
        this.landscapeCard = currentCard
        this.advCards = advCards
        this.wayToCapture = wayToCapture
    }

    move() {
        const score = 3
        const isEnough = this.landscapeCard.isEnoughScoresToCapture(this.wayToCapture, score)
        if (isEnough) {
            // remove landscapeCard from deck and put it to user's deck
            console.log('Yes! the user got this card!')
        } else {
            console.log('No :( the user is going to be lucky next time!')
        }
    }
}