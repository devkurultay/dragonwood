export enum WayToCapture {
  Strike = "Strike",
  Stomp = "Stomp",
  Scream = "Scream",
}

export class Cost {
  constructor(
    public strike: number,
    public stomp: number,
    public scream: number
  ) {}
}

export abstract class DragonWoodCard {
  constructor(public name: string) {}
}

export type DragonWoodCards = Array<DragonWoodCard>;

interface CardWithInstruction {
  instruction: string;
}

export enum EventType {
  PassOneCardToRight = "PassOneCardToRight",
  RemoveAllEnhancements = "RemoveAllEnhancements",
  DiscardOneAdvCard = "DiscardOneAdvCard",
  DrawTwoCards = "DrawTwoCards",
}

export class EventCard extends DragonWoodCard implements CardWithInstruction {
  constructor(
    name: string,
    public instruction: string,
    public eventType: EventType
  ) {
    super(name);
  }
}

export abstract class CapturableCard extends DragonWoodCard {
  constructor(name: string, public cost: Cost) {
    super(name);
  }

  isEnoughScoresToCapture(wayToCapture: WayToCapture, score: number): boolean {
    switch (wayToCapture) {
      case WayToCapture.Strike:
        return score >= this.cost.strike;
      case WayToCapture.Stomp:
        return score >= this.cost.stomp;
      case WayToCapture.Scream:
        return score >= this.cost.stomp;
      default:
        throw new Error("Wrong way of catpure!");
    }
  }
}

export class CreatureCard extends CapturableCard {
  constructor(name: string, cost: Cost, public victoryPoints: number) {
    super(name, cost);
  }
}

export enum EnhancementLifecycle {
  UseOnce = "UseOnce",
  UseThroughoutGage = "UseThroughoutGage",
}

export class PointsAdder {
  constructor(
    public anyAttempt: number,
    public strike: number,
    public stomp: number,
    public scream: number
  ) {}
}

export class EnhancementAbility {
  constructor(
    public cardUsageType: string,
    public canReRoll: boolean,
    public canBeUsedAsAnyAdvCard: boolean,
    public pointsAdder?: PointsAdder
  ) {}
}

export class EnhancementCard
  extends CapturableCard
  implements CardWithInstruction
{
  constructor(
    name: string,
    cost: Cost,
    public instruction: string,
    public ability: EnhancementAbility
  ) {
    super(name, cost);
  }
}
