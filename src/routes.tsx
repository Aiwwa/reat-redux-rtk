import { createBrowserRouter } from 'react-router-dom';
import { App } from './App.tsx';
import { siteMap } from './site-map.ts';
import { ReduxRtkPage } from '@pages/redux-rtk-page/ReduxRtkPage.tsx';

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
        path: siteMap.reduxRTK,
        element: <ReduxRtkPage />,
      },
      {
        path: siteMap.about,
        element: <div>About</div>,
      },
    ],
  },
]);
