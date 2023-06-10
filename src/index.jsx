import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

import { Index } from './views/index/index';
import { Lexicon } from './views/lexicon';
import { GameSettings } from './views/gameSettings';
import { Pexeso } from './views/pexeso';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
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
