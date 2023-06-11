import React from "react";
import { Card } from "./card";
import { useSearchParams } from "react-router-dom";
import "./style.css";
import { Score } from "../../components/Score";
import { useGame } from "./useGame";

export const Pexeso = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const size = Number(searchParams.get("size"));

  const {
    fieldCards,
    first,
    second,
    handleTurn,
    players,
    currentPlayer,
    match,
  } = useGame(mode, size);

  return (
    <div className="pexeso-split">
      <div>
        <Score players={players} />
      </div>
      <div className="pexeso-container">
        <h1>{currentPlayer.name}</h1>
        <div className={`pexeso-game game${size}`}>
          {fieldCards.map((card, i) => (
            <Card
              key={i}
              isSwitched={
                first !== card && second !== card && !match.includes(card?.id)
              }
              onTurn={() => handleTurn(card)}
              img={card.img}
            />
          ))}
        </div>
        {first?.id} - {second?.id}
      </div>
    </div>
  );
};
