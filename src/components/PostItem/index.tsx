import { IPostItem } from '../../interfaces';
import FooterPostItem from '../FooterPostItem';
import PostData from '../PostData';
import RetweetFlag from '../RetweetFlag';

interface IProps {
  post: IPostItem;
}
const PostItem: React.FC<IProps> = ({ post }) => {
  const isRetweeted = post.type === 'retweet';

  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-700">
      <div className="flex flex-col space-y-2 w-full">
        {isRetweeted && <RetweetFlag />}

        <PostData post={post}>
          <PostData post={post.quotePostData} isQuotePostData />
        </PostData>

        {!isRetweeted && <FooterPostItem post={post} />}
      </div>
    </div>
  );
};

export default PostItem;
