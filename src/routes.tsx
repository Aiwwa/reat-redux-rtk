import { createBrowserRouter } from 'react-router-dom';
import { App } from './App.tsx';
import { siteMap } from './site-map.ts';

export const router = createBrowserRouter([
  {
    path: siteMap.home,
    element: <App />,
    children: [
      {
        index: true,
        element: <div>Home</div>,
      },
      {
        path: siteMap.about,
        element: <div>About</div>,
      },
    ],
  },
]);
