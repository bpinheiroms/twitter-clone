import { useState } from 'react';
import { IPostItem } from '../../interfaces';
import Post from '../PostItem';

const ListPosts = () => {
  const [posts, setPosts] = useState<IPostItem[]>([]);

  return (
    <>
      {posts.map((post: IPostItem) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default ListPosts;
