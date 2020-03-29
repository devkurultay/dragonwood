export enum WayToCapture {
    Strike = 'strike',
    Stomp = 'stomp',
    Scream = 'scream'
}

class Cost {
    strike: number
    stomp: number
    scream: number

    constructor(strike: number, stomp: number, scream: number) {
        this.strike = strike
        this.stomp = stomp
        this.scream = scream
    }
}

export abstract class LandscapeCard {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

export class EventCard extends LandscapeCard {
    instruction: string
    constructor(name: string, instruction: string) {
        super(name)
        this.instruction = instruction
    }
}

export abstract class CapturableCard extends LandscapeCard {
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

class SuperAbility {

}

export class EnhancementCard extends CapturableCard {
    superAbility: SuperAbility
    constructor(name: string, cost: Cost, superAbility: SuperAbility) {
        super(name, cost)
        this.superAbility = superAbility
    }
}