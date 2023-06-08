import React from 'react';


export const Players = () => {
    return (
<div>
        <h1>
        Vyber si pokud hraješ s kamarádem nebo sám.
        </h1>

        <nav>
        <Link to="/">Budu hrát sám</Link>
        <span> | </span>
        <Link to="/">Zahraju si s kamarádem</Link>
      </nav>
    </div>
        
       
    )
}