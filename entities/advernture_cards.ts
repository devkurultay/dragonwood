export enum Color {
  Blue = "Blue",
  Red = "Red",
  Orange = "Orange",
  Violet = "Violet",
  Green = "Green",
}

export abstract class AdventurerCard {}
export type AdventurerCards = Array<AdventurerCard>;

export class LuckyLadyBugCard extends AdventurerCard {}

export class RegularCard extends AdventurerCard {
  color: string;
  weight: number;
  constructor(color: string, weight: number) {
    super();
    this.color = color;
    this.weight = weight;
  }
}
