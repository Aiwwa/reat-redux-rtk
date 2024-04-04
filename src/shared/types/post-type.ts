export interface PostType {
  id: string;
  title: string;
  date: string;
  content: string;
  reactions: {
    thumbsUp: number;
    wow: number;
    heart: number;
    rocket: number;
    coffee: number;
  };
}

export interface NewPostType {
  id: string;
  title: string;
  content: string;
}
