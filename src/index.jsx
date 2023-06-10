import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

import { PexesoPage } from './components/PexesoPage';
import QuizPage from './components/QuizPage';
import { Index } from './views/index/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
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

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
