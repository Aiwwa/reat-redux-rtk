import { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from '@features/store.ts';

export const ReduxToolkitPage: FC = (): ReactElement => {
  return <Provider store={store}>ReduxToolkitPage</Provider>;
};
