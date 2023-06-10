import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const GameSettings = () => {
  const navigate = useNavigate();
  const [selectedMode, setSelectedMode] = useState('single');
  const [selectedSize, setSelectedSize] = useState('4');

  const handleModeSelection = (mode) => {
    setSelectedMode(mode);
  };

  const handleStartGame = () => {
    navigate(`/pexeso?mode=${selectedMode}&size=${selectedSize}`);
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
      <div>
        <label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="4">4x4</option>
            <option value="6">6x6</option>
          </select>
          Velikost pole
        </label>
      </div>
      <button onClick={handleStartGame} disabled={!selectedMode}>
        Začít hru
      </button>
    </div>
  );
};
