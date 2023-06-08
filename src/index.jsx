import React from 'react';
import { createRoot, } from 'react-dom/client';
import './style.css';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'

import PexesoPage from './components/PexesoPage';
import QuizPage from './components/QuizPage';
import Players from './components/QuizPage';


const App = () => {
  return (
  <div className="container">

    
      <h1>Jungle Pexeso</h1>

<div>
Vítáme tě  v naší džungli zvířátek. Celou hrou tě bude doprovázet náš kamarád Adam lenochod. 

Hra pexeso procvičí tvoji paměť. Hráč, který najde větší počet stejných dvojic, má hru v kapse a vyhrává!

Vyzkoušej svoje znalosti o zvířátkách formou kvízu.  Na konci hry zjistíš kolik bodů jsi získal.

Bližší informaci o každém zvířátku, které během hry potkáš najdeš v lexikonu zvířátek.
</div>

      <nav>
        <Link to="/pexeso">Pexeso</Link>
        <span> | </span>
        <Link to="/quiz">Kvíz</Link>
      </nav>
    </div>
  );
};




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/pexeso',
    element: <PexesoPage />,
  },
  {
    path: '/quiz',
    element: <QuizPage />,
  },
]);


export default App

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
