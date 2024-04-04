import { store } from '@features/store.ts';

export type NavigationMenuType = {
  route: string;
  displayName: string;
};

export type AppDispatch = typeof store.dispatch;
