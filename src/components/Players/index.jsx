import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// export const Players = () => {
//     return (
// <div>
//         <h1>
//         Vyber si pokud hraješ s kamarádem nebo sám.
//         </h1>

//         <nav>
//         <Link to="/">Budu hrát sám</Link>
//         <span> | </span>
//         <Link to="/">Zahraju si s kamarádem</Link>
//       </nav>
//     </div>

//     )
// }

const GameModeSelection = () => {
  const history = useNavigate();
  const [selectedMode, setSelectedMode] = useState('');

  const handleModeSelection = (mode) => {
    setSelectedMode(mode);
  };

  const handleStartGame = () => {
    if (selectedMode === 'single') {
      history.push('/pexeso/small');
    } else if (selectedMode === 'multiplayer') {
      history.push('/pexeso/large');
    }
  };

  return (
    <div>
      <h1>Výběr režimu hry Pexeso</h1>
      <div>
        <label>
          <input
            type="radio"
            name="mode"
            value="single"
            checked={selectedMode === 'single'}
            onChange={() => handleModeSelection('single')}
          />
          Hrát sám
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="mode"
            value="multiplayer"
            checked={selectedMode === 'multiplayer'}
            onChange={() => handleModeSelection('multiplayer')}
          />
          Hrát s kamarádem
        </label>
      </div>
      <button onClick={handleStartGame} disabled={!selectedMode}>
        Začít hru
      </button>
    </div>
  );
};

export default GameModeSelection;
