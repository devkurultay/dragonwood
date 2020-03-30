"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WayToCapture;
(function (WayToCapture) {
    WayToCapture["Strike"] = "strike";
    WayToCapture["Stomp"] = "stomp";
    WayToCapture["Scream"] = "scream";
})(WayToCapture = exports.WayToCapture || (exports.WayToCapture = {}));
class Cost {
    constructor(strike, stomp, scream) {
        this.strike = strike;
        this.stomp = stomp;
        this.scream = scream;
    }
}
exports.Cost = Cost;
class DragonWoodCard {
    constructor(name) {
        this.name = name;
    }
}
exports.DragonWoodCard = DragonWoodCard;
var EventType;
(function (EventType) {
    EventType["PassOneCardToRight"] = "PassOneCardToRight";
    EventType["RemoveAllEnhancements"] = "RemoveAllEnhancements";
    EventType["DiscardOneAdvCard"] = "DiscardOneAdvCard";
    EventType["DrawTwoCards"] = "DrawTwoCards";
})(EventType = exports.EventType || (exports.EventType = {}));
class EventCard extends DragonWoodCard {
    constructor(name, instruction, eventType) {
        super(name);
        this.instruction = instruction;
        this.eventType = eventType;
    }
}
exports.EventCard = EventCard;
class CapturableCard extends DragonWoodCard {
    constructor(name, cost) {
        super(name);
        this.cost = cost;
    }
    isEnoughScoresToCapture(wayToCapture, score) {
        switch (wayToCapture) {
            case WayToCapture.Strike:
                return score >= this.cost.strike;
            case WayToCapture.Stomp:
                return score >= this.cost.stomp;
            case WayToCapture.Scream:
                return score >= this.cost.stomp;
            default:
                throw new Error('Wrong way of catpure!');
        }
    }
}
exports.CapturableCard = CapturableCard;
class CreatureCard extends CapturableCard {
    constructor(name, cost, victoryPoints) {
        super(name, cost);
        this.victoryPoints = victoryPoints;
    }
}
exports.CreatureCard = CreatureCard;
var EnhancementLifecycle;
(function (EnhancementLifecycle) {
    EnhancementLifecycle["UseOnce"] = "UseOnce";
    EnhancementLifecycle["UseThroughoutGage"] = "UseThroughoutGage";
})(EnhancementLifecycle = exports.EnhancementLifecycle || (exports.EnhancementLifecycle = {}));
class PointsAdder {
    constructor(anyAttempt, strike, stomp, scream) {
        this.anyAttempt = anyAttempt;
        this.strike = strike;
        this.stomp = stomp;
        this.scream = scream;
    }
}
exports.PointsAdder = PointsAdder;
class EnhancementAbility {
    constructor(cardUsageType, canReRoll, canBeUsedAsAnyAdvCard, pointsAdder) {
        this.cardUsageType = cardUsageType;
        this.canReRoll = canReRoll;
        this.canBeUsedAsAnyAdvCard = canBeUsedAsAnyAdvCard;
        this.pointsAdder = pointsAdder;
    }
}
exports.EnhancementAbility = EnhancementAbility;
class EnhancementCard extends CapturableCard {
    constructor(name, cost, instruction, ability) {
        super(name, cost);
        this.ability = ability;
        this.instruction = instruction;
    }
}
exports.EnhancementCard = EnhancementCard;
