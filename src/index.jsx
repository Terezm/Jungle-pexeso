import React from 'react';
import { createRoot, } from 'react-dom/client';
import './style.css';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import HomePage from './components/HomePage';
import PexesoPage from './components/PexesoPage';
import QuizPage from './components/QuizPage';


const App = () => {
  return (
  <div className="container">
      <h1>Jungle Pexeso</h1>
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
