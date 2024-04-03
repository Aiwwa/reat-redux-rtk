import { FC, ReactElement } from 'react';
import { useAppSelector } from '@features/redux-hooks.ts';

export const PostList: FC = (): ReactElement => {
  const posts = useAppSelector((state) => state.posts);

  console.log(posts);

  return <div>asdasd</div>;
};
