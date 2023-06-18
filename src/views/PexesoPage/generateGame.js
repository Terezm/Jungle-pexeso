import { animals } from '../../components/Animals';

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export const generateGame = (size) => {
  const numberOfCards = (size * size) / 2;
  const allCards = [...animals];
  shuffleArray(allCards);
  const cards = allCards.slice(0, numberOfCards);
  const fieldCards = [
    ...cards.map((card) => ({ ...card })),
    ...cards.map((card) => ({ ...card })),
  ];
  shuffleArray(fieldCards);
  fieldCards.forEach((card, i) => {
    card.id = i;
  });
  return fieldCards;
};
