import { useRecoilValue } from 'recoil';
import { IPostItem } from '../../interfaces';
import { filteredTodoListState } from '../../store/feed/selectors';
import Post from '../PostItem';

const ListPosts = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div>
      {todoList?.map((post: IPostItem) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ListPosts;
