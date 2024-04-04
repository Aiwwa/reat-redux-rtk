import { FC, ReactElement, SetStateAction, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '@features/posts/postslice.ts';
import { AppDispatch } from '@shared/types/types.ts';

const AddPostForm: FC = (): ReactElement => {
  const dispatch: AppDispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTitleChanged = (e: { target: { value: SetStateAction<string> } }) =>
    setTitle(e.target.value);
  const onContentChanged = (e: { target: { value: SetStateAction<string> } }) =>
    setContent(e.target.value);

  const handleFormSubmit = () => {
    dispatch(addPost({ title, content }));
  };

  return (
    <section>
      <h1>Add a New Post</h1>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <input
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={handleFormSubmit}>
          Save post
        </button>
      </form>
    </section>
  );
};
export default AddPostForm;
