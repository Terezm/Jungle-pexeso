import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

import { MainPage } from './views/MainPage';
import { GameSettings } from './views/gameSettings';
import { PexesoPage } from './views/PexesoPage';
import { LexiconPage } from './views/LexiconPage';
// import { Footer } from './views/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/pexeso',
    element: <PexesoPage />,
  },
  {
    path: '/lexicon',
    element: <LexiconPage />,
  },
  {
    path: '/game-settings',
    element: <GameSettings />,
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
