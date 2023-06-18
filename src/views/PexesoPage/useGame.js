import { useEffect, useState } from 'react';
import { generateGame } from './generateGame';

export const useGame = (playerNames, size) => {
  const [fieldCards, setFieldCards] = useState([]);

  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [match, setMatch] = useState([]);
  const [message, setMessage] = useState('');
  const [messageDirection, setMessageDirection] = useState('left');
  const [matchSeries, setMatchSeries] = useState(0);

  const sayMessage = (text) => {
    setMessage(text);
    setMessageDirection(Math.random() > 0.5 ? 'left' : 'right');
  };

  const [playerIndex, setPlayerIndex] = useState(0);
  const [players, setPlayers] = useState(
    playerNames.map((name) => ({ name, score: 0 })),
  );
  const currentPlayer = players[playerIndex];

  // generate initial game setup
  useEffect(() => {
    setFieldCards(generateGame(size));
    sayMessage(
      `Ahoj, já jsem Adam. A hraju si strašně rád. Začíná ${currentPlayer.name}. Tak jdeme na to!`,
    );
  }, []);

  const nextPlayer = () => {
    const nextIndex = (playerIndex + 1) % players.length;
    setPlayerIndex(nextIndex);
    setMatchSeries(0);
  };

  const clearSelection = () => {
    setFirst(null);
    setSecond(null);
  };

  const handleMatch = (card) => {
    match.push(first.id);
    match.push(card.id);
    setMatch(match);
    currentPlayer.score += 1;
    setPlayers([...players]);
    clearSelection();
    setMatchSeries(matchSeries + 1);
    if (matchSeries >= 1) {
      sayMessage(
        `To je parádní hra, právě jsi dal ${
          matchSeries + 1
        } obrázky v řadě, ty fakt válíš!`,
      );
    }
  };

  useEffect(() => {
    if (first && second && first.img !== second.img) {
      // timed auto flip back
      // if user clicks other card, it's reset
      const clearTimer = setTimeout(() => {
        clearSelection();
      }, 5000);
      return () => clearTimeout(clearTimer);
    }
  }, [first, second]);

  useEffect(() => {
    console.log(match.length, fieldCards.length);
    if (match.length === fieldCards.length && fieldCards.length) {
      const isDraw =
        players.length === 2 && players[0].score === players[1].score;

      if (isDraw) {
        sayMessage('Konec hry, je to remíza! Zahrajeme si ještě jednou?');
        return;
      }

      const winner = players.reduce((prev, current) => {
        return prev.score > current.score ? prev : current;
      }, 0);
      sayMessage(
        `Konec hry, vyhrál ${winner.name} gratuluju! Zahrajeme si ještě jednou?`,
      );
    }
  }, [match.length, fieldCards.length]);

  const handleTurn = (card) => {
    if (first === null && second === null) {
      // first card clicked
      setFirst(card);
    } else if (second === null && card !== first) {
      // second card clicked
      setSecond(card);
      if (first.img === card.img) {
        handleMatch(card);
      } else {
        nextPlayer();
      }
    } else {
      // third card clicked - continue
      clearSelection();
      setFirst(card);
    }
  };

  return {
    fieldCards,
    first,
    second,
    handleTurn,
    players,
    currentPlayer,
    match,
    message,
    messageDirection,
  };
};
