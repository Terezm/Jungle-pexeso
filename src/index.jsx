import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

import { MainPage } from './views/MainPage';
import { Lexicon } from './views/Lexicon';
import { GameSettings } from './views/gameSettings';
import { Pexeso } from './views/Pexeso';
// import { Footer } from './views/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/pexeso',
    element: <Pexeso />,
  },
  {
    path: '/lexicon',
    element: <Lexicon />,
  },
  {
    path: '/game-settings',
    element: <GameSettings />,
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
