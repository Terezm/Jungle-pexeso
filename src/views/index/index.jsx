import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Footer } from "../Footer";

export const Index = () => {
  return (
    <div className="index-container">
      <div className="index-desktop">
        <div className="index-description">
          <h1>Jungle pexeso</h1>
          <p>
            Ahoj, vítáme tě na našich stránkách online hry pexesa, která má za
            cíl nejen procvičit tvoji paměť, ale seznámit tě i s různými druhy
            zvířátek z divočiny.
          </p>
          <p>
            Celou hrou tě bude doprovázet náš kamarád Adam lenochod. Ten se bude
            během hry různě ukazovat a komentovat průběh událostí.
          </p>
          <p>
            Dozvědět se bližší informaci o každém zvířátku, které během hry
            potkáš můžeš v odkazu lexikonu zvířátek.
          </p>
        </div>
      </div>

      <div className="button-container">
      <div className="button-wrapper">
        <Link to="/game-settings" className="index-button_pexeso">
          Pexeso
        </Link>
        <Link to="/lexicon" className="index-button_lexikon">
          Lexikon zvířat
        </Link>
        </div>
        
      </div>

      <div className="index-sloth"></div>
      <Footer />
    </div>
  );
};
