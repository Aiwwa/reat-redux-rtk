import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { siteMap } from './site-map.ts';
import { NavigationMenuType } from './shared/types.ts';
import { FC, ReactElement } from 'react';

export const App: FC = (): ReactElement => {
  const menu: NavigationMenuType[] = [
    {
      route: siteMap.home,
      displayName: 'Home',
    },
    {
      route: siteMap.about,
      displayName: 'About',
    },
  ];

  return (
    <>
      <header>
        <nav>
          {menu.map((menuItem, index) => {
            return (
              <Link to={menuItem.route} key={index}>
                {menuItem.displayName}
              </Link>
            );
          })}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer />
    </>
  );
};
