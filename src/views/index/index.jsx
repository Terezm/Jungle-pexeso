import React from 'react';
import { Container } from '../../components/Container';
import './style.css';

export function Index() {
  return (
    <Container>
      <div className="desktop">
        <div className="description">
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

      <button className="button_pexeso">Pexeso</button>
      <button
        className="button_lexikon"
        style={{
          whiteSpace: 'nowrap',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Lexikon zvířat
      </button>
      <div className="sloth"></div>
    </Container>
  );
}
