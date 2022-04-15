import { useRecoilValue } from 'recoil';
import { IPostItem } from '../../interfaces';
import { filteredFeedListState } from '../../store/feed/selectors';
import PostItem from '../PostItem';

const ListPosts = () => {
  const feedList = useRecoilValue(filteredFeedListState);

  return (
    <div>
      {feedList?.map((post: IPostItem) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ListPosts;
