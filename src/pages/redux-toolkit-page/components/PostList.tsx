import { FC, ReactElement } from 'react';
import { useAppSelector } from '@features/redux-hooks.ts';
import { PostType } from '@shared/types/post-type.ts';
import AddPostForm from '@pages/redux-toolkit-page/components/AddPostForm.tsx';

export const PostList: FC = (): ReactElement => {
  const posts: PostType[] = useAppSelector((state) => state.posts);

  console.log(posts);
  return (
    <section>
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <article key={post.id} style={{ border: '1px solid white', margin: '16px 0' }}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className="postCredit">
              {/*<PostAuthor userId={post.userId} />*/}
              {/*<TimeAgo timestamp={post.date} />*/}
            </p>
            {/*<ReactionButtons post={post} />*/}
          </article>
        );
      })}
      <AddPostForm />
    </section>
  );
};
