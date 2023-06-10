import React from "react";
import { animals } from "../Animals";
import { useNavigate, Link } from "react-router-dom";

export const LexiconMenu = () => {
  const navigate = useNavigate();
  const viewAnimal = (index) => {
    navigate(`/lexicon?index= ${index}`);
  };

  return (
    <div className="lexicon-levy_sloupec">
      <p>Lexikon zvířat:</p>
      <ul className="lexicon-odrazkove-seznam">
        {animals.map((animal, index) => (
          <li key={index}>
            <Link
              to={`/lexicon?index=${index}`}
              onClick={() => viewAnimal(index)}
            >
              {animal.name}{" "}
            </Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};
