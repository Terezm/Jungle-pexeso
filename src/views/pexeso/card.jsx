import React, { useState } from "react";
import "./card.css";

export const Card = ({ img, switch , onTurn }) => {
    const [isSwitch, setIsSwitch] = useState(true);
   

    const className = isSwitch ? "card switch" : "card";

    return (
        <button
          onClick={() => {
            onTurn();
          }}
          type="button"
          className={className}
        >
                  <div className="card_content">
        <div className="card_front">
          <img
            src={img}
            alt=""
            width="240"
            height="240"
            className="img"
          />
        </div>
        <div className="card_back"></div>
      </div>
    </button>
  );
};

