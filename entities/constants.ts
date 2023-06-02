import {
  Cost,
  EnhancementCard,
  EnhancementAbility,
  EnhancementLifecycle,
  PointsAdder,
  EventCard,
  EventType,
  CreatureCard,
  DragonWoodCards,
} from "./dragonwood_cards";
import { createArrayOfNumbers } from "../common/utils";

const charmedPotion = new EnhancementCard(
  "CHARMED POTION",
  new Cost(5, 4, 5),
  "Use only once as any Adventurer card",
  new EnhancementAbility(EnhancementLifecycle.UseOnce, false, true)
);
const friendlyBunny = new EnhancementCard(
  "FRIENDLY BUNNY",
  new Cost(4, 4, 4),
  "Use only once to roll 1 extra die in a capture attempt.",
  new EnhancementAbility(EnhancementLifecycle.UseOnce, true, false)
);
const lightningBolt = new EnhancementCard(
  "LIGHTNING BOLT",
  new Cost(7, 5, 7),
  "Use only once to add 4 points to any capture attempt.",
  new EnhancementAbility(
    EnhancementLifecycle.UseOnce,
    false,
    false,
    new PointsAdder(4, 0, 0, 0)
  )
);
const ghostDisguise = new EnhancementCard(
  "GHOST DISGUISE",
  new Cost(8, 7, 10),
  "Add 2 points to any Scream.",
  new EnhancementAbility(
    EnhancementLifecycle.UseThroughoutGage,
    false,
    false,
    new PointsAdder(0, 0, 0, 2)
  )
);
const cloakOfDarkness = new EnhancementCard(
  "CLOAK OF DARKNESS",
  new Cost(11, 9, 11),
  "Add 2 points to all capture attempts.",
  new EnhancementAbility(
    EnhancementLifecycle.UseThroughoutGage,
    false,
    false,
    new PointsAdder(2, 0, 0, 0)
  )
);
const magicalUnicorn = new EnhancementCard(
  "MAGICAL UNICORN",
  new Cost(8, 6, 8),
  "Add 1 point to all capture attempts.",
  new EnhancementAbility(
    EnhancementLifecycle.UseThroughoutGage,
    false,
    false,
    new PointsAdder(1, 0, 0, 0)
  )
);
const silverSword = new EnhancementCard(
  "SILVER SWORD",
  new Cost(10, 6, 7),
  "Add 2 point to any Strike.",
  new EnhancementAbility(
    EnhancementLifecycle.UseThroughoutGage,
    false,
    false,
    new PointsAdder(0, 2, 0, 0)
  )
);
const bucketOfSpinach = new EnhancementCard(
  "BUCKET OF SPINACH",
  new Cost(7, 10, 8),
  "Add 2 point to any Stomp.",
  new EnhancementAbility(
    EnhancementLifecycle.UseThroughoutGage,
    false,
    false,
    new PointsAdder(0, 0, 2, 0)
  )
);
const luckyMushroom = new EnhancementCard(
  "LUCKY MUSHROOM",
  new Cost(7, 5, 7),
  "Re-roll 1 die in capture attempts.",
  new EnhancementAbility(EnhancementLifecycle.UseThroughoutGage, true, false)
);

export const EnhancementCards = [
  charmedPotion,
  friendlyBunny,
  lightningBolt,
  ghostDisguise,
  cloakOfDarkness,
  magicalUnicorn,
  silverSword,
  bucketOfSpinach,
  luckyMushroom,
];

const windStorm = new EventCard(
  "WIND STORM",
  "All players pass 1 Adventurer card to the right.",
  EventType.PassOneCardToRight
);
const quickSand = new EventCard(
  "QUICKSAND",
  "Remove all enhancements in the Landscape. Replace with new cards.",
  EventType.RemoveAllEnhancements
);
const thunderStorm = new EventCard(
  "THUNDER STORM",
  "All players must discard 1 Adventurer card",
  EventType.DiscardOneAdvCard
);
const sunnyDay = new EventCard(
  "SUNNY DAY",
  "All players draw 2 cards.",
  EventType.DrawTwoCards
);

export const EventCards = [windStorm, quickSand, thunderStorm, sunnyDay];

const spookySpiders = createArrayOfNumbers(4).map((n: number) => {
  return new CreatureCard("SPOOKY SPIDERS", new Cost(3, 3, 4), 1);
});

const crazyBats = createArrayOfNumbers(4).map((n: number) => {
  return new CreatureCard("CRAZY BATS", new Cost(4, 3, 3), 1);
});

const gigglingGoblin = createArrayOfNumbers(2).map((n: number) => {
  return new CreatureCard("GIGGLING GOBLIN", new Cost(7, 5, 5), 2);
});

const fireAnts = createArrayOfNumbers(2).map((n: number) => {
  return new CreatureCard("FIRE ANTS", new Cost(7, 4, 6), 2);
});

const waspsNet = createArrayOfNumbers(2).map((n: number) => {
  return new CreatureCard("WASPS'S NEST", new Cost(5, 6, 7), 2);
});

const hungryBear = createArrayOfNumbers(2).map((n: number) => {
  return new CreatureCard("HUNGRY BEAR", new Cost(7, 6, 9), 3);
});

const packOfWolves = createArrayOfNumbers(2).map((n: number) => {
  return new CreatureCard("PACK OF WOLVES", new Cost(6, 7, 9), 3);
});

const fierceJaguar = createArrayOfNumbers(2).map((n: number) => {
  return new CreatureCard("FIERCE JAGUAR", new Cost(8, 6, 8), 3);
});

const wildBoar = createArrayOfNumbers(2).map((n: number) => {
  return new CreatureCard("WILD BOAR", new Cost(8, 7, 7), 3);
});

const giganticPython = new CreatureCard(
  "GIGANTIC PYTHON",
  new Cost(11, 8, 10),
  4
);

const secretShadow = new CreatureCard("SECRET SHADOW", new Cost(10, 8, 11), 4);

const grumpyTroll = new CreatureCard("GRUMPY TROLL", new Cost(9, 11, 9), 4);

const gooeyGlob = new CreatureCard("GOOEY GLOB", new Cost(14, 9, 10), 5);

const angryOgre = new CreatureCard("ANGRY OGRE", new Cost(12, 9, 14), 5);

const blueDragon = new CreatureCard("BLUE DRAGON", new Cost(13, 10, 13), 6);

const orangeDragon = new CreatureCard("ORANGE DRAGON", new Cost(15, 11, 12), 7);

export const CreatureCards: DragonWoodCards = [
  ...spookySpiders,
  ...crazyBats,
  ...gigglingGoblin,
  ...fireAnts,
  ...waspsNet,
  ...hungryBear,
  ...packOfWolves,
  ...fierceJaguar,
  ...wildBoar,
  giganticPython,
  secretShadow,
  grumpyTroll,
  gooeyGlob,
  angryOgre,
  blueDragon,
  orangeDragon,
];
