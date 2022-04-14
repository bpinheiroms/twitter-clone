import { useRecoilValue } from 'recoil';
import { IPostItem } from '../../interfaces';
import { filteredFeedListState } from '../../store/feed/selectors';
import Post from '../PostItem';

const ListPosts = () => {
  const todoList = useRecoilValue(filteredFeedListState);

  return (
    <div>
      {todoList?.map((post: IPostItem) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ListPosts;
