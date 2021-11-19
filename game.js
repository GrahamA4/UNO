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

let cardSlot = {
  type: cardTypeRandom(),
  color: cardColorRandom()
};
