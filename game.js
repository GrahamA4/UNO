//GAME SETUP//
class player {
  constructor(players, playerDeck) {
    this.player = players;
    this.playerDeck = playerDeck;
  }
}

//GAME SETUP//

//CARD CONTAINER / RANDOMIZER///
const numbCards = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const wildCards = ['plus4', 'wild'];

const wildColorCards = ['skip', 'reverse', 'plus2'];

const cardType = [...numbCards, ...wildCards, ...wildColorCards];

const cardColor = ['blue', 'red', 'yellow', 'green'];

const cardTypeRandom = () => {
  return Math.floor(cardType.length * Math.random());
};

const cardColorRandom = () => {
  return Math.floor(cardColor.length * Math.random());
};

const cardRandom = function () {
  return [cardTypeRandom(), cardColorRandom()];
};
// console.log(cardRandom());

//CARD CONTAINER / RANDOMIZER///

// Game Status//
let gameOver = false;
// Game Status//

//PLAYERS / DECKS //

let playerDeck = [
  ['', ''],
  ['', ''],
  ['', ''],
  ['', ''],
  ['', ''],
  ['', ''],
  ['', '']
];

playerDeck.forEach((card) => {
  console.log(cardRandom());
});
// console.log(playerDeck);
// const players = document.querySelectorAll('.cards').length;
//PLAYERS / DECKS //
