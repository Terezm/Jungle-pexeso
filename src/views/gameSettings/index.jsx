import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export const GameSettings = () => {
  const navigate = useNavigate();
  const [playerNames, setPlayerNames] = useState(['Hráč 1']);
  const [selectedSize, setSelectedSize] = useState('4');

  const handleStartGame = () => {
    navigate(
      `/pexeso?${playerNames
        .map((name) => `players=${name}`)
        .join('&')}&size=${selectedSize}`,
    );
  };

  return (
    <div className="container">
      <div className="choice">
        <h1 className="title">Výběr režimu hry Pexeso</h1>
        <div>
          <label>
            <input
              type="radio"
              name="mode"
              value="single"
              checked={playerNames.length === 1}
              onChange={() => {
                setPlayerNames([playerNames[0]]);
              }}
            />
            Hrát sám
          </label>

          <div>
            <label>
              <input
                type="radio"
                name="mode"
                value="multiplayer"
                checked={playerNames.length === 2}
                onChange={() => {
                  setPlayerNames([...playerNames, 'Player 2']);
                }}
              />
              Hrát s kamarádem
            </label>
          </div>
          <div>
            {playerNames.map((name, index) => {
              return (
                <label>
                  Jméno hráče
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setPlayerNames(
                        playerNames.map((name, i) => {
                          if (index === i) {
                            return e.target.value;
                          }
                          return name;
                        }),
                      );
                    }}
                  />
                </label>
              );
            })}
          </div>
          <div>
            <label>
              Velikost pole:{'    '}
              <select
                className="field-size "
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="4">4x4</option>
                <option value="6">6x6</option>
              </select>
            </label>
          </div>
          <br />
          <button className="btn" onClick={handleStartGame}>
            Začít hru
          </button>
        </div>
      </div>
    </div>
  );
};
