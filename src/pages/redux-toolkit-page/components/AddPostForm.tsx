import { FC, ReactElement, SetStateAction, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '@features/posts/postslice.ts';
import { nanoid } from '@reduxjs/toolkit';

const AddPostForm: FC = (): ReactElement => {
  const dispatch = useDispatch();
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTitleChanged = (e: { target: { value: SetStateAction<string> } }) =>
    setTitle(e.target.value);
  const onContentChanged = (e: { target: { value: SetStateAction<string> } }) =>
    setContent(e.target.value);

  const handleFormSubmit = () => {
    dispatch(
      addPost({
        id: nanoid(),
        title,
        content,
      })
    );
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
