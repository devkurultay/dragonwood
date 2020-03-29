export enum WayToCapture {
    Strike = 'strike',
    Stomp = 'stomp',
    Scream = 'scream'
}

export class Cost {
    strike: number
    stomp: number
    scream: number

    constructor(strike: number, stomp: number, scream: number) {
        this.strike = strike
        this.stomp = stomp
        this.scream = scream
    }
}

export abstract class DragonWoodCard {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

interface CardWithInstruction {
    instruction: string
}

export class EventCard extends DragonWoodCard implements CardWithInstruction {
    instruction: string
    constructor(name: string, instruction: string) {
        super(name)
        this.instruction = instruction
    }
}

export abstract class CapturableCard extends DragonWoodCard {
    cost: Cost
    constructor(name: string, cost: Cost) {
        super(name)
        this.cost = cost
    }

    isEnoughScoresToCapture(wayToCapture: string, score: number): boolean {
        switch (wayToCapture) {
            case WayToCapture.Strike:
                return score >= this.cost.strike
            case WayToCapture.Stomp:
                return score >= this.cost.stomp
            case WayToCapture.Scream:
                return score >= this.cost.stomp
            default:
                throw new Error('Wrong way of catpure!')
        }
    }
}

export class CreatureCard extends CapturableCard {
    victoryPoints: number;
    constructor(name: string, cost: Cost, victoryPoints: number) {
        super(name, cost)
        this.victoryPoints = victoryPoints
    }
}

export enum EnhancementLifecycle {
    UseOnce = 'UseOnce',
    UseThroughoutGage = 'UseThroughoutGage'
}

export class PointsAdder {
    anyAttempt: number
    strike: number
    stomp: number
    scream: number
    constructor (anyAttempt: number, strike: number, stomp: number, scream: number) {
        this.anyAttempt = anyAttempt
        this.strike = strike
        this.stomp = stomp
        this.scream = scream
    }
}

export class EnhancementAbility {
    cardUsageType: string
    canReRoll: boolean
    canBeUsedAsAnyAdvCard: boolean
    pointsAdder: PointsAdder | undefined
    constructor(
        cardUsageType: string,
        canReRoll: boolean,
        canBeUsedAsAnyAdvCard: boolean,
        pointsAdder?: PointsAdder
        ) {
        this.cardUsageType = cardUsageType
        this.canReRoll = canReRoll
        this.canBeUsedAsAnyAdvCard = canBeUsedAsAnyAdvCard
        this.pointsAdder = pointsAdder
    }
}

export class EnhancementCard extends CapturableCard implements CardWithInstruction {
    ability: EnhancementAbility
    instruction: string
    constructor(name: string, cost: Cost, instruction: string, ability: EnhancementAbility) {
        super(name, cost)
        this.ability = ability
        this.instruction = instruction
    }
}