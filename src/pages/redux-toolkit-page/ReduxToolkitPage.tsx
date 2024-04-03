import { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from '@features/store.ts';
import { PostList } from '@pages/redux-toolkit-page/components/PostList.tsx';

export const ReduxToolkitPage: FC = (): ReactElement => {
  return (
    <Provider store={store}>
      <PostList />
    </Provider>
  );
};
