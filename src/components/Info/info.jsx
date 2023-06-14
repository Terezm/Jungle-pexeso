import React, { useState } from 'react';
import './info.css';

export const Info = () => {
  const animals = [
    {
      name: 'Delfín',
      description:
        'Delfín je inteligentní a společenský mořský savec. Má štíhlé tělo, ploutve a dlouhý zobák.',
      habitat: 'Delfíni žijí v oceánech po celém světě.',
      diet: 'Delfíni se živí rybami a korýši.',
    },
    {
      name: 'Žirafa',
      description:
        'Žirafa je vysoký a dlouhokrký savec s dlouhými nohama a skvrnitým vzorem na srsti.',
      habitat: 'Žirafy žijí v otevřených savanách a lesích v Africe.',
      diet: 'Žirafy se živí listy a větvemi stromů.',
    },
    {
      name: 'Slon',
      description:
        'Slon je největší suchozemský savec s dlouhým chobotem a velkými kly.',
      habitat:
        'Sloni se vyskytují v různých typech prostředí, včetně lesů, savan a bažin.',
      diet: 'Sloni se živí trávou, větvemi, plody a kůrou stromů.',
    },
    {
      name: 'Gorila',
      description:
        'Gorila je velký a silný primát s robustním tělem a silnými končetinami.',
      habitat:
        'Gorily obývají lesy a horské oblasti ve Střední a Východní Africe.',
      diet: 'Gorily se živí převážně rostlinnou stravou, jako jsou listy, výhonky a ovoce.',
    },
    {
      name: 'Hroch',
      description:
        'Nosorožci mají tělo pokryté pláty jako pancířem, mohou dosahovat hmotnosti až 3,6 tuny. Patří tedy k největším suchozemským živočichům (po slonech)Čich a sluch mají velmi citlivý, ale špatně vidí, jsou krátkozrací.',
      habitat: 'Nosorožci se vyskytují v části jižní Afriky.',
      diet: ' Živí se převážně okusováním stromů a trnitých keřů. Požírají listy, větvičky, výhonky, dřevo i ovoce.',
    },
    {
      name: 'Nosorožec',
      description:
        'Hroch je těžký a robustní savec s velkou hlavou, tlustým tělem a velkými ústy.',
      habitat:
        'Hroši se vyskytují v řekách, jezerech a mokřadech subsaharské Afriky.',
      diet: 'Hroši se živí převážně rostlinnou stravou, jako je tráva, listy a plody.',
    },
    {
      name: 'Panda',
      description:
        'Panda je černobílý medvěd s charakteristickým vzhledem a potravou.',
      habitat: 'Pandy žijí v horách a lesích v Číně.',
      diet: 'Pandy se živí převážně bambusem.',
    },
    {
      name: 'Zebra',
      description:
        'Zebra je africké zvíře s černým a bílým pruhovaným vzorem na srsti.',
      habitat: 'Zebry obývají otevřené savany a pastviny v Africe.',
      diet: 'Zebry se živí trávou a bylinami.',
    },
    {
      name: 'Bílý tygr',
      description:
        'Bílý tygr je vzácná forma tygra s bílou srstí a tmavými pruhy.',
      habitat: 'Bílí tygři se vyskytují převážně v oblastech Indie.',
      diet: 'Bílí tygři se živí převážně masem.',
    },
    {
      name: 'Vodní želva',
      description:
        'Vodní želva je želva přizpůsobená životu ve vodě s pancířem a ploutvemi.',
      habitat: 'Vodní želvy žijí v jezerech, řekách a mořích po celém světě.',
      diet: 'Vodní želvy se živí rostlinnou i živočišnou stravou, včetně vodních rostlin a malých živočichů.',
    },
    {
      name: ' Lev',
      description:
        'Lev je velká kočkovitá šelma ze savany. Má hnědou srst s černými skvrnami a dlouhé drápy.',
      habitat: 'Lev žije převážně v Africe, ve stepích a savanách.',
      diet: 'Lev se živí převážně masem, loví různá stáda zvířat.',
    },

    {
      name: 'Gepard',
      description:
        'Gepard je rychlý a elegantní šelma, která je známá svou schopností dosáhnout vysokých rychlostí během krátkých sprintů.',
      habitat: 'Afrika, části Asie',
      diet: 'Maso (loví menší savce)',
    },
    {
      name: 'Koala',
      description:
        'Koala je malý savec s šedou srstí, velkýma ušima a výraznými okrouhlýma očima. Je známý svou předností k eukalyptovým listům.',
      habitat: 'Austrálie',
      diet: 'Eukalyptové listy',
    },
    {
      name: 'Vlk',
      description:
        'Vlk je velký dravec, který žije ve smečkách a je známý svou inteligencí a společenským chováním.',
      habitat: 'Severní Amerika, Evropa, Asie',
      diet: 'Maso (loví převážně jeleny, losy)',
    },
    {
      name: 'Klokan',
      description:
        'Klokan je skákavý savec se silnými zadními končetinami a dlouhým ocasem. Je známý svou schopností přeskočit velké vzdálenosti pomocí skoků.',
      habitat: 'Austrálie a okolní ostrovy',
      diet: 'Tráva, listy, výhonky',
    },
    {
      name: 'Chameleon',
      description:
        'Chameleon je plaz s schopností měnit barvu své kůže, což mu pomáhá se maskovat a komunikovat.',
      habitat: 'Afrika, Madagaskar, jižní Evropa, Asie',
      diet: 'Hmyz, pavouci, malí obratlovci',
    },

    {
      name: 'Medvěd hnědý',
      description:
        'Medvěd hnědý je velký savec s robustním tělem a silnými tlapami. Je známý svou schopností hibernovat.',
      habitat: 'Severní Amerika, Evropa, Asie',
      diet: 'Tráva, kořínky, ovoce, ryby',
    },

    {
      name: 'Kočka domácí',
      description:
        'Kočka domácí je malý druh šelmy, který se často chová jako domácí mazlíček. Je známá svou nezávislostí a elegantním pohybem.',
      habitat: 'Domácnosti, farmy, městská prostředí',
      diet: 'Maso, suché krmivo',
    },

    {
      name: 'Bizon',
      description:
        'Bizon je velký savec z čeledi turovitých. Má robustní tělo, silné končetiny a výrazný hrb na zádech. Je známý svou masivností a imponujícími rohy u obou pohlaví.',
      habitat: 'Severní Amerika (hlavně prérie a lesnaté oblasti)',
      diet: 'Tráva, byliny, větvičky, listy',
    },

    {
      name: 'Krokodýl nilský',
      description:
        'Krokodýl nilský je velký plaz se silnou tlamou a hřbetními hřebeny. Je známý svou schopností lovit ve vodě.',
      habitat: 'Afrika (převážně Nil)',
      diet: 'Ryby, ptáci, savci',
    },
    {
      name: 'Puma',
      description:
        'Puma je velká kočkovitá šelma se silnými svaly a špičatými ušima. Je známá svou obratností a loveckými schopnostmi.',
      habitat: 'Lesy a horské oblasti Ameriky',
      diet: 'Maso (loví převážně jeleny, kapybary)',
    },
    {
      name: 'Kapybara',
      description:
        'Kapybara je největší žijící hlodavec na světě. Má robustní tělo, krátké nohy a charakteristicky ploché uši. Je známá svou společenskou povahou a schopností žít ve velkých skupinách.',
      habitat: 'Bažiny, pobřežní oblasti a říční nivy v Jižní Americe',
      diet: 'Tráva, vodní rostliny, listy, kůra',
    },

    {
      name: 'Surikata',
      description:
        'Surikata je malá šelma známá svým společenským chováním a schopností hlídat okolí. Je často zobrazována ve filmech a animovaných seriálech.',
      habitat: 'Pouště a polopouště Jižní Afriky',
      diet: 'Hmyz, pavouci, menší obratlovci',
    },
    {
      name: 'Tukan',
      description:
        'Tukan je pestře zbarvený pták s velkým zobákem. Je známý svým hlasitým křikem a je často spojován s pralesy Jižní Ameriky.',
      habitat: 'Pralesy Střední a Jižní Ameriky',
      diet: 'Ovoce, semena, hmyz',
    },
    {
      name: 'Tučňák císařský',
      description:
        'Tučňák císařský je velký tučňák s charakteristickým oranžovým límcem kolem krku. Je známý svou schopností vydržet extrémní mrazy.',
      habitat: 'Antarktida',
      diet: 'Ryby, kril',
    },
    {
      name: 'Kobra indická',
      description:
        'Kobra indická je jedovatý had s charakteristickou roztažitelnou královskou kapucí. Je známá svým výstražným chováním a jedovatým kousnutím.',
      habitat: 'Indický subkontinent a jeho okolí',
      diet: 'Malí savci, ptáci, plazi',
    },
    {
      name: 'Plameňák růžový',
      description:
        'Plameňák růžový je velký pták s dlouhými nohama a charakteristickou růžovou barvou peří. Je známý svou elegantní postavou a skupinovým chováním.',
      habitat: 'Slaná jezera a močály',
      diet: 'Raky, měkkýši, řasy',
    },
    {
      name: 'Tapír',
      description:
        'Tapír je velký býložravý savec s charakteristickým pohyblivým chobotem. Je známý svou robustní stavbou těla a schopností plavat.',
      habitat: 'Deštné pralesy v Jižní a Střední Americe, jihovýchodní Asie',
      diet: 'Listy, výhonky, ovoce, tráva',
    },
    {
      name: 'Jaguár',
      description:
        'Jaguár je velká kočkovitá šelma s krátkými a silnými nohami. Je známý svou sílou a loveckými schopnostmi.',
      habitat: 'Deštné pralesy a bažiny v Americe',
      diet: 'Maso (loví převážně kapybary, opice)',
    },

    {
      name: 'Černý panter',
      description:
        'Černý panter je melanistická forma leoparda nebo jaguára, která má černé zbarvení. Je známý svou elegancí, sílou a loveckými schopnostmi.',
      habitat: 'Různé typy lesů a horské oblasti',
      diet: 'Maso (loví převážně menší a středně velké savce)',
    },
  ];

  return (
    <div>
      <h1>Zvířata</h1>
      {animals.map((animal, index) => (
        <div key={index}>
          <h2>Jméno:{animal.name}</h2>
          <p>Popis:{animal.description}</p>
          <p>Místo výskytu: {animal.habitat}</p>
          <p>Strava: {animal.diet}</p>
        </div>
      ))}
    </div>
  );
};
