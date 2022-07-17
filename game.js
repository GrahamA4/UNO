///// player display ////
const p1hide = document.querySelector('.hidep1');
const p2hide = document.querySelector('.hidep2');
const p3hide = document.querySelector('.hidep3');
const p4hide = document.querySelector('.hidep4');
const user1 = document.querySelector('#player1');
const user2 = document.querySelector('#player2');
const user3 = document.querySelector('#player3');
const user4 = document.querySelector('#player4');

//// player display ////

// Game Status//
let gameOver = false;
function start() {
  if (gameOver === false) {
    p1hide.classList.remove('hidep1');
    p2hide.classList.remove('hidep2');
    p3hide.classList.remove('hidep3');
    p4hide.classList.remove('hidep4');
  } else {
    p1hide.classList.add('hidep1');
    p2hide.classList.add('hidep2');
    p3hide.classList.add('hidep3');
    p4hide.classList.add('hidep4');
  }
}
start();

//CARD CONTAINER / RANDOMIZER///
const numbCards = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const wildCards = ['plus4', 'wild'];

const wildColorCards = ['skip', 'reverse', 'plus2'];

const cardType = [...numbCards, ...wildCards, ...wildColorCards];

let cardColor = ['blue', 'red', 'yellow', 'green'];

const cardTypeRandom = () => {
  return Math.floor(cardType.length * Math.random());
};

const cardColorRandom = () => {
  return Math.floor(cardColor.length * Math.random());
};

const cardRandom = function () {
  return [cardTypeRandom(), cardColorRandom()];
};
cardRandom();
//CARD CONTAINER / RANDOMIZER///
//PLAYERS / DECKS //

let playerDeck = [];
const deckRandom = () => {
  for (let i = 0; i < 7; i++) {
    playerDeck.push(cardRandom());
    if (cardColor.indexOf(i) == 'blue' && cardType.indexOf(i) == '1') {
      card1.classList.add('blue');
      card2.classList.add('blue');
    }
  }
  return playerDeck;
}; //PLAYERS / DECKS //
//GAME SETUP//
class Player {
  constructor(players) {
    this.player = players;
    this.card = 0;
  }
  giveDeck() {
    this.playerDeck = deckRandom();
  }
}
// GAME SETUP//

// PLAYERS //
let players = [
  document.querySelector('#player1').children,
  document.querySelector('#player2').children,
  document.querySelector('#player3').children,
  document.querySelector('#player4').children
];

const player1 = new Player('User1');
player1.giveDeck();
// console.log(player1);

const player2 = new Player('User2');
player2.giveDeck();
// console.log(player2);

const player3 = new Player('User3');
player3.giveDeck();
// console.log(player3);

const player4 = new Player('User4');
player4.giveDeck();
// console.log(player4);
// PLAYEsRS //

// ASSIGN //

for (let i = 0; i <= player1.playerDeck.length; ++i) {
  user1.innerHTML = `<div class="horizontal1" id="card">${player1.playerDeck[0]}</div><div class="horizontal1" id="card">${player1.playerDeck[1]}</div>
  <div class="horizontal1" id="card">${player1.playerDeck[2]}</div>
  <div class="horizontal1" id="card">${player1.playerDeck[3]}</div>
  <div class="horizontal1" id="card">${player1.playerDeck[4]}</div>
  <div class="horizontal1" id="card">${player1.playerDeck[5]}</div>
  <div class="horizontal1" id="card">${player1.playerDeck[6]}</div>`;
}
const card = document.querySelectorAll('#card');
const player1Card = document.querySelectorAll('.horizontal1');

let pairs = [];
for (let i = 0; i < cardColor.length; i += 1) {
  for (let j = 0; j < numbCards.length; j += 1) {
    pairs.push([i, Number(numbCards[j])]);
  }
  if (cardColor[i] === 0) {
    player1Card.classList.add('blue');
  }
}

for (let i = 0; i < player1Card.length; i += 1) {
  if (
    card == '0,0' ||
    card == '1,0' ||
    card == '2,0' ||
    card == '3,0' ||
    card == '4,0' ||
    card == '5,0' ||
    card == '6,0' ||
    card == '7,0' ||
    card == '8,0' ||
    card == '9,0' ||
    card == '10,0' ||
    card == '11,0' ||
    card == '12,0' ||
    card == '13,0'
  ) {
  }
}

for (let i = 0; i < playerDeck.length; i += 1) {
  const checkColor = () => {
    if (
      card == '0,0' ||
      card == '1,0' ||
      card == '2,0' ||
      card == '3,0' ||
      card == '4,0' ||
      card == '5,0' ||
      card == '6,0' ||
      card == '7,0' ||
      card == '8,0' ||
      card == '9,0' ||
      card == '10,0' ||
      card == '11,0' ||
      card == '12,0' ||
      card == '13,0'
    ) {
      player1Card.classList.add('blue');
      player1Card.classList.add('blue');
    }
    if (
      card == '0,1' ||
      card == '1,1' ||
      card == '2,1' ||
      card == '3,1' ||
      card == '4,1' ||
      card == '5,1' ||
      card == '6,1' ||
      card == '7,1' ||
      card == '8,1' ||
      card == '9,1' ||
      card == '10,1' ||
      card == '11,1' ||
      card == '12,1' ||
      card == '13,1'
    ) {
      player1Card.classList.add('red');
    }
    if (
      card == '0,2' ||
      card == '1,2' ||
      card == '2,2' ||
      card == '3,2' ||
      card == '4,2' ||
      card == '5,2' ||
      card == '6,2' ||
      card == '7,2' ||
      card == '8,2' ||
      card == '9,2' ||
      card == '10,2' ||
      card == '11,2' ||
      card == '12,2' ||
      card == '13,2'
    ) {
      player1Card.classList.add('yellow');
    }
    if (
      card == '0,3' ||
      card == '1,3' ||
      card == '2,3' ||
      card == '3,3' ||
      card == '4,3' ||
      card == '5,3' ||
      card == '6,3' ||
      card == '7,3' ||
      card == '8,3' ||
      card == '9,3' ||
      card == '10,3' ||
      card == '11,3' ||
      card == '12,3' ||
      card == '13,3'
    ) {
      player1Card.classList.add('green');
    }
  };
  checkColor();
}

// player1Card.addEventListener('click', function () {
//   console.log('working');
// });

// ASSIGN //
