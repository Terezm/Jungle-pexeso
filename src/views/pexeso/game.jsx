import React, { useState } from "react";
import { card } from "./card";
import "./game.css";

const cards = [];
img.forEach((img, index) => {
  cards.push({ img: img, id: `a${index}` });
  cards.push({ img: img, id: `b${index}` });
});
cards.sort(() => Math.random() - 0.5);

let deduction;

export const Hra = () => {
  const [firstId, setFirstId] = useState(null);
  const [secondId, setSecondId] = useState(null);
  const [match, setMatch] = useState([]);
  return (
    <div className="game">
      {cards.map((card) => (
        <Card
          switch={
            firstId !== card.id &&
            secondId !== card.id &&
            !match.includes(card.id)
          }
          onTurn={() => {
            if (firstId === null && secondId === null) {
              setFirstId(card.id);
            } else if (secondId === null) {
              setSecondId(card.id);
              deduction = setTimeout(() => {
                setFirstId(null);
                setSecondId(null);
              }, 5000);
              if (firstId.slice(1) === card.id.slice(1)) {
                match.push(firstId);
                match.push(card.id);
                setMatch(match);
              }
            } else {
              clearTimeout(deduction);
              setFirstId(card.id);
              setSecondId(null);
            }
          }}
          key={card.id}
          img={card.img}
        />
      ))}
      {firstId} - {secondId}
    </div>
  );
};
