"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dragonwood_cards_1 = require("./dragonwood_cards");
const utils_1 = require("../common/utils");
const charmedPotion = new dragonwood_cards_1.EnhancementCard('CHARMED POTION', new dragonwood_cards_1.Cost(5, 4, 5), 'Use only once as any Adventurer card', new dragonwood_cards_1.EnhancementAbility(dragonwood_cards_1.EnhancementLifecycle.UseOnce, false, true));
const friendlyBunny = new dragonwood_cards_1.EnhancementCard('FRIENDLY BUNNY', new dragonwood_cards_1.Cost(4, 4, 4), 'Use only once to roll 1 extra die in a capture attempt.', new dragonwood_cards_1.EnhancementAbility(dragonwood_cards_1.EnhancementLifecycle.UseOnce, true, false));
const lightningBolt = new dragonwood_cards_1.EnhancementCard('LIGHTNING BOLT', new dragonwood_cards_1.Cost(7, 5, 7), 'Use only once to add 4 points to any capture attempt.', new dragonwood_cards_1.EnhancementAbility(dragonwood_cards_1.EnhancementLifecycle.UseOnce, false, false, new dragonwood_cards_1.PointsAdder(4, 0, 0, 0)));
const ghostDisguise = new dragonwood_cards_1.EnhancementCard('GHOST DISGUISE', new dragonwood_cards_1.Cost(8, 7, 10), 'Add 2 points to any Scream.', new dragonwood_cards_1.EnhancementAbility(dragonwood_cards_1.EnhancementLifecycle.UseThroughoutGage, false, false, new dragonwood_cards_1.PointsAdder(0, 0, 0, 2)));
const cloakOfDarkness = new dragonwood_cards_1.EnhancementCard('CLOAK OF DARKNESS', new dragonwood_cards_1.Cost(11, 9, 11), 'Add 2 points to all capture attempts.', new dragonwood_cards_1.EnhancementAbility(dragonwood_cards_1.EnhancementLifecycle.UseThroughoutGage, false, false, new dragonwood_cards_1.PointsAdder(2, 0, 0, 0)));
const magicalUnicorn = new dragonwood_cards_1.EnhancementCard('MAGICAL UNICORN', new dragonwood_cards_1.Cost(8, 6, 8), 'Add 1 point to all capture attempts.', new dragonwood_cards_1.EnhancementAbility(dragonwood_cards_1.EnhancementLifecycle.UseThroughoutGage, false, false, new dragonwood_cards_1.PointsAdder(1, 0, 0, 0)));
const silverSword = new dragonwood_cards_1.EnhancementCard('SILVER SWORD', new dragonwood_cards_1.Cost(10, 6, 7), 'Add 2 point to any Strike.', new dragonwood_cards_1.EnhancementAbility(dragonwood_cards_1.EnhancementLifecycle.UseThroughoutGage, false, false, new dragonwood_cards_1.PointsAdder(0, 2, 0, 0)));
const bucketOfSpinach = new dragonwood_cards_1.EnhancementCard('BUCKET OF SPINACH', new dragonwood_cards_1.Cost(7, 10, 8), 'Add 2 point to any Stomp.', new dragonwood_cards_1.EnhancementAbility(dragonwood_cards_1.EnhancementLifecycle.UseThroughoutGage, false, false, new dragonwood_cards_1.PointsAdder(0, 0, 2, 0)));
const luckyMushroom = new dragonwood_cards_1.EnhancementCard('LUCKY MUSHROOM', new dragonwood_cards_1.Cost(7, 5, 7), 'Re-roll 1 die in capture attempts.', new dragonwood_cards_1.EnhancementAbility(dragonwood_cards_1.EnhancementLifecycle.UseThroughoutGage, true, false));
exports.EnhancementCards = [
    charmedPotion,
    friendlyBunny,
    lightningBolt,
    ghostDisguise,
    cloakOfDarkness,
    magicalUnicorn,
    silverSword,
    bucketOfSpinach,
    luckyMushroom
];
const windStorm = new dragonwood_cards_1.EventCard('WIND STORM', 'All players pass 1 Adventurer card to the right.', dragonwood_cards_1.EventType.PassOneCardToRight);
const quickSand = new dragonwood_cards_1.EventCard('QUICKSAND', 'Remove all enhancements in the Landscape. Replace with new cards.', dragonwood_cards_1.EventType.RemoveAllEnhancements);
const thunderStorm = new dragonwood_cards_1.EventCard('THUNDER STORM', 'All players must discard 1 Adventurer card', dragonwood_cards_1.EventType.DiscardOneAdvCard);
const sunnyDay = new dragonwood_cards_1.EventCard('SUNNY DAY', 'All players draw 2 cards.', dragonwood_cards_1.EventType.DrawTwoCards);
exports.EventCards = [
    windStorm,
    quickSand,
    thunderStorm,
    sunnyDay
];
const spookySpiders = utils_1.createArrayOfNumbers(4).map((n) => {
    return new dragonwood_cards_1.CreatureCard('SPOOKY SPIDERS', new dragonwood_cards_1.Cost(3, 3, 4), 1);
});
const crazyBats = utils_1.createArrayOfNumbers(4).map((n) => {
    return new dragonwood_cards_1.CreatureCard('CRAZY BATS', new dragonwood_cards_1.Cost(4, 3, 3), 1);
});
const gigglingGoblin = utils_1.createArrayOfNumbers(2).map((n) => {
    return new dragonwood_cards_1.CreatureCard('GIGGLING GOBLIN', new dragonwood_cards_1.Cost(7, 5, 5), 2);
});
const fireAnts = utils_1.createArrayOfNumbers(2).map((n) => {
    return new dragonwood_cards_1.CreatureCard('FIRE ANTS', new dragonwood_cards_1.Cost(7, 4, 6), 2);
});
const waspsNet = utils_1.createArrayOfNumbers(2).map((n) => {
    return new dragonwood_cards_1.CreatureCard('WASPS\'S NEST', new dragonwood_cards_1.Cost(5, 6, 7), 2);
});
const hungryBear = utils_1.createArrayOfNumbers(2).map((n) => {
    return new dragonwood_cards_1.CreatureCard('HUNGRY BEAR', new dragonwood_cards_1.Cost(7, 6, 9), 3);
});
const packOfWolves = utils_1.createArrayOfNumbers(2).map((n) => {
    return new dragonwood_cards_1.CreatureCard('PACK OF WOLVES', new dragonwood_cards_1.Cost(6, 7, 9), 3);
});
const fierceJaguar = utils_1.createArrayOfNumbers(2).map((n) => {
    return new dragonwood_cards_1.CreatureCard('FIERCE JAGUAR', new dragonwood_cards_1.Cost(8, 6, 8), 3);
});
const wildBoar = utils_1.createArrayOfNumbers(2).map((n) => {
    return new dragonwood_cards_1.CreatureCard('WILD BOAR', new dragonwood_cards_1.Cost(8, 7, 7), 3);
});
const giganticPython = new dragonwood_cards_1.CreatureCard('GIGANTIC PYTHON', new dragonwood_cards_1.Cost(11, 8, 10), 4);
const secretShadow = new dragonwood_cards_1.CreatureCard('SECRET SHADOW', new dragonwood_cards_1.Cost(10, 8, 11), 4);
const grumpyTroll = new dragonwood_cards_1.CreatureCard('GRUMPY TROLL', new dragonwood_cards_1.Cost(9, 11, 9), 4);
const gooeyGlob = new dragonwood_cards_1.CreatureCard('GOOEY GLOB', new dragonwood_cards_1.Cost(14, 9, 10), 5);
const angryOgre = new dragonwood_cards_1.CreatureCard('ANGRY OGRE', new dragonwood_cards_1.Cost(12, 9, 14), 5);
const blueDragon = new dragonwood_cards_1.CreatureCard('BLUE DRAGON', new dragonwood_cards_1.Cost(13, 10, 13), 6);
const orangeDragon = new dragonwood_cards_1.CreatureCard('ORANGE DRAGON', new dragonwood_cards_1.Cost(15, 11, 12), 7);
exports.CreatureCards = [
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
    orangeDragon
];
