import React from 'react';
import './style.css';

export function Lexicon() {
  return (
    <div className="lexicon-containter">
      <div className="lexicon-desktop"></div>
      <img src="/morska_zelva.svg" alt="morska_zelva" />
      <div className="lexicon-description">
        <p>Mořská želva:</p>

        <p>
          Víš, že želvy žily na Zemi už před více než 220 miliony let? Kvůli
          stále narůstajícímu ubývajícímu počtu patří mezi ohrožený druh. Mořské
          želvy jsou všežravé. Mezi jejich potravu patří: medúzy, houby, drobní
          korýši a malé ryby. Pohybují se převážně v tropických moří. Čím se od
          suchozemských a sladkovodních želv odlišují je především přítomností
          solných žláz ukrytých v lebce, končetinami přeměněnými v ploutve a
          redukovanějším, tedy na pohyb v moři lépe adaptovaným krunýřem.
        </p>
      </div>
      <div className="lexicon-levy_sloupec">
        <p>Lexikon zvířat:</p>
        <ul className="lexicon-odrazkove-seznam">
          <li>První položka</li>
          <li>Druhá položka</li>
          <li>Třetí položka</li>
        </ul>
      </div>
      <div className="lexicon-sloth"></div>
      <div className="lexicon-icon_home"></div>
    </div>
  );
}
