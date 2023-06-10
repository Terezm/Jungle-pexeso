import React, { useEffect, useState } from 'react';
import { Card } from './card';
import { useSearchParams } from 'react-router-dom';
import { generateGame } from './generateGame';
import './style.css';

export const Pexeso = () => {
  const [searchParams] = useSearchParams();
  const [fieldCards, setFieldCards] = useState([]);
  const mode = searchParams.get('mode');
  const size = searchParams.get('size');

  const players =
    mode === 'single'
      ? [{ name: 'Hráč 1' }]
      : [{ name: 'Hráč 1' }, { name: 'Hráč 2' }];
  const [playerIndex, setPlayerIndex] = useState(0);

  function nextPlayer() {
    const nextIndex = (playerIndex + 1) % players.length;
    setPlayerIndex(nextIndex);
  }

  function clearSelection() {
    setFirst(null);
    setSecond(null);
  }

  const currentPlayer = players[playerIndex];

  useEffect(() => {
    setFieldCards(generateGame(size));
  }, []);

  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [match, setMatch] = useState([]);

  let deduction;
  return (
    <div>
      <h1>{currentPlayer.name}</h1>
      <div className={`pexeso-container game${size}`}>
        {fieldCards.map((card, i) => (
          <Card
            key={i}
            isSwitched={
              first !== card && second !== card && !match.includes(card?.id)
            }
            onTurn={() => {
              if (first === null && second === null) {
                setFirst(card);
              } else if (second === null) {
                setSecond(card);
                if (first.img === card.img) {
                  match.push(first.id);
                  match.push(card.id);
                  setMatch(match);
                  clearTimeout(deduction);
                } else {
                  deduction = setTimeout(() => {
                    clearSelection();
                    nextPlayer();
                  }, 5000);
                }
              } else {
                nextPlayer();
                clearTimeout(deduction);
                setFirst(card);
                setSecond(null);
              }
            }}
            img={card.img}
          />
        ))}
      </div>
      {first?.id} - {second?.id}
    </div>
  );
};
