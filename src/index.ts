import './index.scss';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const tarot = require('tarot-deck');

const tarorDeck = tarot.majorArcana;
const card = document.querySelector('#card');
const container = document.querySelector('.container');

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let cardNum = getRandomInt(1, 22);

function changeIcon() {
  let newCardNum = getRandomInt(1, 22);
  do {
    newCardNum = getRandomInt(1, 22);
  } while (cardNum === newCardNum);

  // tarorDeck[newCardNum]['rank'];
  card?.removeAttribute('class');
  card?.classList.add(`c${tarorDeck[newCardNum].rank}`);
  const textChange = document.querySelector('.fText');
  textChange!.innerHTML = `${tarorDeck[newCardNum].fortune_telling['1']}`;
  cardNum = newCardNum;
}

container?.addEventListener('click', changeIcon);
