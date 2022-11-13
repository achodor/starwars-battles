import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './routes/root';
import StarshipsCompare, { loader as compareStarshipsLoader } from './routes/starshipsCompare';
import StarshipsSingle, { loader as singleStarshipsLoader } from './routes/starshipsSingle';
import Starships from './routes/starships';
import Characters from './routes/characters';
import CharactersSingle, { loader as singleCharactersLoader } from './routes/charactersSingle';
import CharactersCompare, { loader as compareCharactersLoader } from './routes/characterCompare';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/starships',
        element: <Starships />,
        children: [
          {
            path: '/starships/:one',
            element: <StarshipsSingle />,
            loader: singleStarshipsLoader
          },
          {
            path: '/starships/:one/:two',
            element: <StarshipsCompare />,
            loader: compareStarshipsLoader
          }
        ]
      },
      {
        path: '/characters',
        element: <Characters />,
        children: [
          {
            path: '/characters/:one',
            element: <CharactersSingle />,
            loader: singleCharactersLoader
          },
          {
            path: '/characters/:one/:two',
            element: <CharactersCompare />,
            loader: compareCharactersLoader
          }
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
