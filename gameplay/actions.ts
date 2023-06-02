import { AdventurerCard, AdventurerCards } from "../entities/advernture_cards";
import { CapturableCard, DragonWoodCards } from "../entities/dragonwood_cards";
import { Player } from "../entities/player";
import {
  INITIAL_NUMBER_OF_ADV_CARDS,
  MAX_NUMBER_OF_CARDS_ON_LANDSCAPE,
} from "../common/constants";
import {
  createPlayers,
  createAdventurerCards,
  createDragonWoodCards,
} from "./helpers";

export function giveUserAdventurerCards(
  player: Player,
  advCards: AdventurerCards
) {
  advCards.forEach((_: AdventurerCard, ind: number) => {
    if (INITIAL_NUMBER_OF_ADV_CARDS > ind) {
      const elem = advCards.splice(ind, 1);
      player.addCardToDeck([...elem]);
    }
  });
}

export function distributeAdventurerCards(
  players: Array<Player>,
  adventurerCards: AdventurerCards
) {
  players.forEach((player: Player) => {
    giveUserAdventurerCards(player, adventurerCards);
  });
}

export class Game {
  players: Array<Player> = [];
  dragonWoodCardsDeck: DragonWoodCards = [];
  landscape: DragonWoodCards = [];
  adventurerCardsdeck: AdventurerCards = [];

  constructor(numberOfPlayers: number = 4) {
    this.players = createPlayers(numberOfPlayers);
  }

  start() {
    this.dragonWoodCardsDeck = createDragonWoodCards();
    const adventurerCards = createAdventurerCards();
    distributeAdventurerCards(this.players, adventurerCards);
    this.adventurerCardsdeck = adventurerCards;
    this.initializeLandscape();

    const gameInitializedMsg = this.getGameInitializeMsg();
    return gameInitializedMsg;
  }

  private initializeLandscape() {
    for (let i = 0; MAX_NUMBER_OF_CARDS_ON_LANDSCAPE > i; i++) {
      this.moveCardFromDragonWoodDeckToLandscape();
    }
  }

  moveCardFromDragonWoodDeckToLandscape() {
    const [card] = this.dragonWoodCardsDeck.splice(0, 1);
    if (this.landscape.length < MAX_NUMBER_OF_CARDS_ON_LANDSCAPE) {
      this.landscape.push(card);
    } else {
      throw Error("Only 5 Dragonwood cards are allowed on the Landscape!");
    }
  }

  private getGameInitializeMsg() {
    const playersNum = this.players.length;
    const playersPluralized = playersNum > 1 ? "players" : "player";
    return `Game started with ${playersNum} ${playersPluralized}.`;
  }
}

class Movement {
  landscapeCard: CapturableCard;
  advCards: AdventurerCards;
  wayToCapture: string;

  constructor(
    currentCard: CapturableCard,
    advCards: AdventurerCards,
    wayToCapture: string
  ) {
    this.landscapeCard = currentCard;
    this.advCards = advCards;
    this.wayToCapture = wayToCapture;
  }

  move() {
    const score = 3;
    const isEnough = this.landscapeCard.isEnoughScoresToCapture(
      this.wayToCapture,
      score
    );
    if (isEnough) {
      // remove landscapeCard from deck and put it to user's deck
      console.log("Yes! the user got this card!");
    } else {
      console.log("No :( the user is going to be lucky next time!");
    }
  }
}
