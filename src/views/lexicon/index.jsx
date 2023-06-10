import React from "react";
import "./style.css";
import { LexiconMenu } from "../../components/LexiconMenu";
import { useSearchParams } from "react-router-dom";
import { animals } from "../../components/Animals";

export function Lexicon() {
  const [searchParams] = useSearchParams();
  const index = Number(searchParams.get("index"));
  console.log(searchParams.get("index"));

  const animal = animals[index];

  return (
    <div className="lexicon-containter">
      <div className="lexicon-desktop"></div>
      <div className="image-container">
        <img className="animal-image" src={animal.img} alt={animal.name} />
      </div>
      <div className="lexicon-description">
        <p>{animal.name}</p>

        <p>{animal.description}</p>
        <p>Výskyt: {animal.habitat}</p>
        <p>Strava: {animal.diet}</p>
      </div>
      <LexiconMenu />
      <div className="lexicon-sloth"></div>
      <div className="lexicon-icon_home"></div>
    </div>
  );
}
