import { AdventurerCard, AdventurerCards } from "../entities/advernture_cards";
import {
  CapturableCard,
  CapturableCards,
  DragonWoodCard,
  DragonWoodCards,
  WayToCapture,
} from "../entities/dragonwood_cards";
import { Player, Players } from "../entities/player";
import {
  INITIAL_NUMBER_OF_ADV_CARDS,
  MAX_NUMBER_OF_CARDS_ON_LANDSCAPE,
} from "../common/constants";
import {
  createPlayers,
  createAdventurerCards,
  createDragonWoodCards,
  rollDice,
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
  players: Players,
  advCards: AdventurerCards
) {
  players.forEach((player: Player) => {
    giveUserAdventurerCards(player, advCards);
  });
}

type NumberOfDicePieces = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export class Game {
  players: Players = [];
  dragonWoodCardsDeck: DragonWoodCards = [];
  landscape: DragonWoodCards = [];
  adventurerCardsDeck: AdventurerCards = [];
  currentPlayerIndex: number = 0;

  constructor(numberOfPlayers: number = 4) {
    this.players = createPlayers(numberOfPlayers);
    this.start();
  }

  private pickNextPlayerIndex() {
    const playersNum = this.players.length;
    const index = Math.floor(Math.random() * playersNum);
    return index;
  }

  private start() {
    this.dragonWoodCardsDeck = createDragonWoodCards();
    const adventurerCards = createAdventurerCards();
    distributeAdventurerCards(this.players, adventurerCards);
    this.adventurerCardsDeck = adventurerCards;
    this.initializeLandscape();
    this.currentPlayerIndex = this.pickNextPlayerIndex();

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

  rollDice(numberOfPieces: NumberOfDicePieces) {
    const result = Array.from(Array(numberOfPieces)).map(rollDice);
    return result.reduce((acc, curr) => acc + curr, 0);
  }

  private getGameInitializeMsg() {
    const playersNum = this.players.length;
    const playersPluralized = playersNum > 1 ? "players" : "player";
    return `Game started with ${playersNum} ${playersPluralized}.`;
  }

  move() {
    const currentPlayer: Player = this.players[this.currentPlayerIndex];

    // TODO: take capturableCard as a user's choice via GUI
    const capturableCardsFromLandscape: CapturableCards = this.landscape.filter(
      (item) => {
        // return items with isEnoughScoresToCapture attribute
        return (
          item instanceof CapturableCard && !!item?.isEnoughScoresToCapture
        );
      }
    ) as CapturableCards;
    console.log("=====", capturableCardsFromLandscape);
    const capturableCardIndex = Math.floor(
      Math.random() * capturableCardsFromLandscape.length
    );
    const capturableCard: CapturableCard =
      capturableCardsFromLandscape[capturableCardIndex];

    const userAdvCards = currentPlayer.getHand();
    const wayToCapture = WayToCapture.Strike; // TODO: take user's choice as an input
    const move = new Move(capturableCard, userAdvCards, wayToCapture);
    move.commit();

    if (this.currentPlayerIndex === this.players.length - 1) {
      this.currentPlayerIndex = 0;
    } else {
      this.currentPlayerIndex++;
    }
  }
}

class Move {
  constructor(
    public landscapeCard: CapturableCard,
    public advCards: AdventurerCards,
    public wayToCapture: WayToCapture
  ) {}

  commit() {
    const score = 3;
    const isEnough = this.landscapeCard.isEnoughScoresToCapture(
      this.wayToCapture,
      score
    );
    if (isEnough) {
      // remove landscapeCard from deck and put it to user's deck
      console.log("Yes! the user got this card!");
      return true;
    } else {
      console.log("No :( the user is going to be lucky next time!");
      return false;
    }
  }
}
