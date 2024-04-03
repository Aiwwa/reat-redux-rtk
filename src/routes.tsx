import { createBrowserRouter } from 'react-router-dom';
import { App } from './App.tsx';
import { siteMap } from './site-map.ts';
import { ReduxRtkPage } from '@pages/redux-rtk-page/ReduxRtkPage.tsx';
import { ReduxToolkitPage } from '@pages/redux-toolkit-page/ReduxToolkitPage.tsx';

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
        path: siteMap.reduxToolkit,
        element: <ReduxToolkitPage />,
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
