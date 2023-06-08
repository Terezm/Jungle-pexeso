import React, { useState } from "react";
import "./info.css";


export const Info = () => {
  const animals = [
    {
      name: 'Delfín',
      description: 'Delfín je inteligentní a společenský mořský savec. Má štíhlé tělo, ploutve a dlouhý zobák.',
      habitat: 'Delfíni žijí v oceánech po celém světě.',
      diet: 'Delfíni se živí rybami a korýši.',
    },
    {
      name: 'Žirafa',
      description: 'Žirafa je vysoký a dlouhokrký savec s dlouhými nohama a skvrnitým vzorem na srsti.',
      habitat: 'Žirafy žijí v otevřených savanách a lesích v Africe.',
      diet: 'Žirafy se živí listy a větvemi stromů.',
    },
    {
      name: 'Slon',
      description: 'Slon je největší suchozemský savec s dlouhým chobotem a velkými kly.',
      habitat: 'Sloni se vyskytují v různých typech prostředí, včetně lesů, savan a bažin.',
      diet: 'Sloni se živí trávou, větvemi, plody a kůrou stromů.',
    },
    {
      name: 'Gorila',
      description: 'Gorila je velký a silný primát s robustním tělem a silnými končetinami.',
      habitat: 'Gorily obývají lesy a horské oblasti ve Střední a Východní Africe.',
      diet: 'Gorily se živí převážně rostlinnou stravou, jako jsou listy, výhonky a ovoce.',
    },
    {
      name: 'Hroch',
      description: 'Hroch je těžký a robustní savec s velkou hlavou, tlustým tělem a velkými ústy.',
      habitat: 'Hroši se vyskytují v řekách, jezerech a mokřadech subsaharské Afriky.',
      diet: 'Hroši se živí převážně rostlinnou stravou, jako je tráva, listy a plody.',
    },
    {
      name: 'Panda',
      description: 'Panda je černobílý medvěd s charakteristickým vzhledem a potravou.',
      habitat: 'Pandy žijí v horách a lesích v Číně.',
      diet: 'Pandy se živí převážně bambusem.',
    },
    {
        name: 'Zebra',
        description: 'Zebra je africké zvíře s černým a bílým pruhovaným vzorem na srsti.',
        habitat: 'Zebry obývají otevřené savany a pastviny v Africe.',
        diet: 'Zebry se živí trávou a bylinami.',
      },
      {
        name: 'Bílý tygr',
        description: 'Bílý tygr je vzácná forma tygra s bílou srstí a tmavými pruhy.',
        habitat: 'Bílí tygři se vyskytují převážně v oblastech Indie.',
        diet: 'Bílí tygři se živí převážně masem.',
      },
      {
        name: 'Vodní želva',
        description: 'Vodní želva je želva přizpůsobená životu ve vodě s pancířem a ploutvemi.',
        habitat: 'Vodní želvy žijí v jezerech, řekách a mořích po celém světě.',
        diet: 'Vodní želvy se živí rostlinnou i živočišnou stravou, včetně vodních rostlin a malých živočichů.',
      },
      {
        name: ' Lev',
        description: 'Lev je velká kočkovitá šelma ze savany. Má hnědou srst s černými skvrnami a dlouhé drápy.',
        habitat: 'Lev žije převážně v Africe, ve stepích a savanách.',
        diet: 'Lev se živí převážně masem, loví různá stáda zvířat.',
      },
    ];
  
    return (
      <div>
        <h1>Zvířata</h1>
        {animals.map((animal, index) => (
          <div key={index}>
            <h2>{animal.name}</h2>
            <p>{animal.description}</p>
            <p>Místo výskytu: {animal.habitat}</p>
            <p>Strava: {animal.diet}</p>
          </div>
        ))}
      </div>
    );
  };
  
  
