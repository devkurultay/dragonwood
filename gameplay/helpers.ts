import {
  AdventurerCards,
  LuckyLadyBugCard,
  RegularCard,
} from "../entities/advernture_cards";
import {
  EnhancementCards,
  EventCards,
  CreatureCards,
} from "../entities/constants";
import { createArrayOfNumbers } from "../common/utils";
import { Color } from "../entities/advernture_cards";
import { DragonWoodCards } from "../entities/dragonwood_cards";
import { Player } from "../entities/player";

export function createAdventurerCards(): AdventurerCards {
  const colors = Object.keys(Color);
  const numbers = createArrayOfNumbers(12, 1);
  const cards: AdventurerCards = [];
  numbers.forEach((num: number) => {
    colors.forEach((color: string) => {
      cards.push(new RegularCard(color, num));
    });
  });
  const luckyLadybugNumbers = createArrayOfNumbers(4);
  luckyLadybugNumbers.forEach((_: number) => {
    cards.push(new LuckyLadyBugCard());
  });
  return cards;
}

export function createDragonWoodCards(): DragonWoodCards {
  return [...EnhancementCards, ...EventCards, ...CreatureCards];
}

export function createPlayers(numberOfPlayers: number) {
  const num = createArrayOfNumbers(numberOfPlayers, 1);
  return num.map((n: number) => new Player());
}
