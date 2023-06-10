import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { generateGame } from './generateGame';
import './style.css';

export const Pexeso = () => {
  const [searchParams] = useSearchParams();
  const [fieldCards, setFieldCards] = useState([]);

  const mode = searchParams.get('mode');
  const size = searchParams.get('size');

  useEffect(() => {
    setFieldCards(generateGame(size));
  }, []);

  return (
    <div className={`pexeso-container game${size}`}>
      {fieldCards.map((animal, i) => (
        <div key={i} className="pexeso-image-container">
          <img src={animal.img} />
        </div>
      ))}
    </div>
  );
};
