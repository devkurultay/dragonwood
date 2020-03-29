var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cost = /** @class */ (function () {
    function Cost() {
    }
    return Cost;
}());
var LandscapeCard = /** @class */ (function () {
    function LandscapeCard(name) {
        this.name = name;
    }
    return LandscapeCard;
}());
var EventCard = /** @class */ (function (_super) {
    __extends(EventCard, _super);
    function EventCard(name, instruction) {
        var _this = _super.call(this, name) || this;
        _this.instruction = instruction;
        return _this;
    }
    return EventCard;
}(LandscapeCard));
var card = new EventCard('Thunderstorm', 'All players must discard 1 Adventure card');
console.log(card.name, card.instruction);
var CapturableCard = /** @class */ (function (_super) {
    __extends(CapturableCard, _super);
    function CapturableCard(name, cost) {
        var _this = _super.call(this, name) || this;
        _this.cost = cost;
        return _this;
    }
    return CapturableCard;
}(LandscapeCard));
// class CreatureCard extends CapturableCard {}
