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
class LandscapeCard {
    constructor(name) {
        this.name = name;
    }
}
exports.LandscapeCard = LandscapeCard;
class EventCard extends LandscapeCard {
    constructor(name, instruction) {
        super(name);
        this.instruction = instruction;
    }
}
exports.EventCard = EventCard;
class CapturableCard extends LandscapeCard {
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
class SuperAbility {
}
class EnhancementCard extends CapturableCard {
    constructor(name, cost, superAbility) {
        super(name, cost);
        this.superAbility = superAbility;
    }
}
exports.EnhancementCard = EnhancementCard;
