import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const GameSettings = () => {
  const navigate = useNavigate();
  const [selectedMode, setSelectedMode] = useState("single");
  const [selectedSize, setSelectedSize] = useState("4");

  const handleModeSelection = (mode) => {
    setSelectedMode(mode);
  };

  const handleStartGame = () => {
    navigate(`/pexeso?mode=${selectedMode}&size=${selectedSize}`);
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
            checked={selectedMode === "single"}
            onChange={() => handleModeSelection("single")}
          />
          Hrát sám
        </label>

        <div>
          <label>
            <input
              type="radio"
              name="mode"
              value="multiplayer"
              checked={selectedMode === "multiplayer"}
              onChange={() => handleModeSelection("multiplayer")}
            />
            Hrát s kamarádem
          </label>
        </div>
        <div>
          <label>
            Velikost pole:{"    "}
            <select className="field-size "
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="4">4x4</option>
              <option value="6">6x6</option>
            </select>
          </label>
        </div>
        <br />
        <button className="btn" onClick={handleStartGame} disabled={!selectedMode}>
          Začít hru
        </button>
      </div>
    </div>
    </div>
  );
};
