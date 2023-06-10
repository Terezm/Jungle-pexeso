import { animals } from '../../components/Animals';

export const generateGame = (size) => {
  const numberOfCards = (size * size) / 2;
  const allCards = [...animals];
  allCards.sort(() => Math.random() - 0.5);
  const cards = allCards.slice(0, numberOfCards);
  const fieldCards = [...cards, ...cards];
  fieldCards.sort(() => Math.random() - 0.5);
  return fieldCards;
};
