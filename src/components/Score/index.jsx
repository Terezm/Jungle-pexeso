import React from 'react';
import './style.css';

export const Score = ({ players }) => {
  return (
    <div className="score-container">
      {players.map((player) => {
        return (
          <div key={player.name} className="score-item">
            <div className="score-name">{player.name}</div>
            <div className="score-value">{player.score}</div>
          </div>
        );
      })}
    </div>
  );
};
