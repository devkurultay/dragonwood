import {
    Cost,
    EnhancementCard,
    EnhancementAbility,
    EnhancementLifecycle,
    PointsAdder
} from "./dragonwood_cards";

const charmedPotion = new EnhancementCard(
    'CHARMED POTION',
    new Cost(5, 4, 5),
    'Use only once as any Adventurer card',
    new EnhancementAbility(
        EnhancementLifecycle.UseOnce,
        false,
        true
    )
)
const friendlyBunny = new EnhancementCard(
    'FRIENDLY BUNNY',
    new Cost(4, 4, 4),
    'Use only once to roll 1 extra die in a capture attempt.',
    new EnhancementAbility(
        EnhancementLifecycle.UseOnce,
        true,
        false
    )
)
const lightningBolt = new EnhancementCard(
    'LIGHTNING BOLT',
    new Cost(7, 5, 7),
    'Use only once to add 4 points to any capture attempt.',
    new EnhancementAbility(
        EnhancementLifecycle.UseOnce,
        false,
        false,
        new PointsAdder(4, 0, 0, 0)
    )
)
const ghostDisguise = new EnhancementCard(
    'GHOST DISGUISE',
    new Cost(8, 7, 10),
    'Add 2 points to any Scream.',
    new EnhancementAbility(
        EnhancementLifecycle.UseThroughoutGage,
        false,
        false,
        new PointsAdder(0, 0, 0, 2)
    )
)
const cloakOfDarkness = new EnhancementCard(
    'CLOAK OF DARKNESS',
    new Cost(11, 9, 11),
    'Add 2 points to all capture attempts.',
    new EnhancementAbility(
        EnhancementLifecycle.UseThroughoutGage,
        false,
        false,
        new PointsAdder(2, 0, 0, 0)
    )
)
const magicalUnicorn = new EnhancementCard(
    'MAGICAL UNICORN',
    new Cost(8, 6, 8),
    'Add 1 point to all capture attempts.',
    new EnhancementAbility(
        EnhancementLifecycle.UseThroughoutGage,
        false,
        false,
        new PointsAdder(1, 0, 0, 0)
    )
)
const silverSword = new EnhancementCard(
    'SILVER SWORD',
    new Cost(10, 6, 7),
    'Add 2 point to any Strike.',
    new EnhancementAbility(
        EnhancementLifecycle.UseThroughoutGage,
        false,
        false,
        new PointsAdder(0, 2, 0, 0)
    )
)
const bucketOfSpinach = new EnhancementCard(
    'BUCKET OF SPINACH',
    new Cost(7, 10, 8),
    'Add 2 point to any Stomp.',
    new EnhancementAbility(
        EnhancementLifecycle.UseThroughoutGage,
        false,
        false,
        new PointsAdder(0, 0, 2, 0)
    )
)
const luckyMushroom = new EnhancementCard(
    'LUCKY MUSHROOM',
    new Cost(7, 5, 7),
    'Re-roll 1 die in capture attempts.',
    new EnhancementAbility(
        EnhancementLifecycle.UseThroughoutGage,
        true,
        false
    )
)

export const EnhancementCards = [
    charmedPotion,
    friendlyBunny,
    lightningBolt,
    ghostDisguise,
    cloakOfDarkness,
    magicalUnicorn,
    silverSword,
    bucketOfSpinach,
    luckyMushroom
]