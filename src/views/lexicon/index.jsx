import React from "react";
import "./style.css";
import { LexiconMenu } from "../../components/LexiconMenu";
import { useSearchParams } from "react-router-dom";
import { animals } from "../../components/Animals";
import { HomeNavigation } from "../../components/HomeNavigation";

export function Lexicon() {
  const [searchParams] = useSearchParams();
  const index = Number(searchParams.get("index"));
  const animalSelected = searchParams.get("index") != null;

  const animal = animals[index];

  return (
    <div
      className={`lexicon-containter ${
        animalSelected ? "animal-selected" : ""
      }`}
    >
      <HomeNavigation />
      <LexiconMenu />
      <div className="lexicon-main">
        <div className="lexicon-desktop"></div>
        <div className="image-container">
          <img className="animal-image" src={animal.img} alt={animal.name} />
        </div>
        <div className="lexicon-description">
          <p className="name">{animal.name}</p>

          <p>{animal.description}</p>
          <p>Výskyt: {animal.habitat}</p>
          <p>Strava: {animal.diet}</p>
        </div>
        <div className="lexicon-sloth"></div>
        <div className="lexicon-icon_home"></div>
      </div>
    </div>
  );
}
