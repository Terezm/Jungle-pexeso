import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export function Index() {
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

      <Link to="/pexeso" className="index-button_pexeso">
        Pexeso
      </Link>
      <Link
        to="/lexicon"
        className="index-button_lexikon"
        style={{
          whiteSpace: "nowrap",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Lexikon zvířat
      </Link>
      <div className="index-sloth"></div>
    </div>
  );
}
