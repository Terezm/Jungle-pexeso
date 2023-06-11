import { useEffect, useState } from "react";
import { generateGame } from "./generateGame";

export function useGame(mode, size) {
  const [fieldCards, setFieldCards] = useState([]);

  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [match, setMatch] = useState([]);

  // generate initial game setup
  useEffect(() => {
    setFieldCards(generateGame(size));
  }, []);

  const [playerIndex, setPlayerIndex] = useState(0);
  const [players, setPlayers] = useState(
    mode === "single"
      ? [{ name: "Hráč 1", score: 0 }]
      : [
          { name: "Hráč 1", score: 0 },
          { name: "Hráč 2", score: 0 },
        ]
  );

  function nextPlayer() {
    const nextIndex = (playerIndex + 1) % players.length;
    setPlayerIndex(nextIndex);
  }

  function clearSelection() {
    setFirst(null);
    setSecond(null);
  }

  function handleMatch(card) {
    match.push(first.id);
    match.push(card.id);
    setMatch(match);
    currentPlayer.score += 1;
    setPlayers([...players]);
    clearSelection();
  }

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

  function handleTurn(card) {
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
  }

  const currentPlayer = players[playerIndex];

  return {
    fieldCards,
    first,
    second,
    handleTurn,
    players,
    currentPlayer,
    match,
  };
}
