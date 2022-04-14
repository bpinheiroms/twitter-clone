import { useRecoilValue } from 'recoil';
import { IPostItem } from '../../interfaces';
import { feedListState } from '../../store/feed';
import Post from '../PostItem';

const ListPosts = () => {
  const todoList = useRecoilValue(feedListState);

  return (
    <div>
      {todoList?.map((post: IPostItem) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ListPosts;
