import React from "react";
import { Card } from "./card";
import { useSearchParams } from "react-router-dom";
import "./style.css";
import { Score } from "../../components/Score";
import { useGame } from "./useGame";
import { Sloth } from "../../components/Sloth";
import { useEffect } from "react";
import { HomeNavigation } from "../../components/HomeNavigation";
import { Footer } from "../Footer";

export const Pexeso = () => {
  const [searchParams] = useSearchParams();
  const size = Number(searchParams.get("size"));
  const playerNames = searchParams.getAll("players");

  const {
    fieldCards,
    first,
    second,
    handleTurn,
    players,
    currentPlayer,
    match,
    message,
    messageDirection,
  } = useGame(playerNames, size);

  return (
    <div className="pexeso-split">
      <HomeNavigation />
      <div>
        <Score players={players} />
      </div>
      <div className="pexeso-container">
        <h1>
          Právě hraje : <br />
          <br />
          {currentPlayer.name}
        </h1>
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
      <Sloth message={message} direction={messageDirection} />
      <br />
      {/* <Footer /> */}
    </div>
  );
};
