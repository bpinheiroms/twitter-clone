import { ReplyIcon, SwitchHorizontalIcon } from '@heroicons/react/outline';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { generateRetweetData } from '../../helper/tweet';
import { IPostItem } from '../../interfaces';
import { feedListState } from '../../store/feed/atoms';
import { exceedLimitPostsState } from '../../store/feed/selectors';
import { quoteModalState } from '../../store/modals/atoms';

interface IProps {
  post: IPostItem;
}

const FooterPostItem: React.FC<IProps> = ({ post }) => {
  const setFeedList = useSetRecoilState(feedListState);
  const setQuoteModal = useSetRecoilState(quoteModalState);

  const exceedLimitPosts = useRecoilValue(exceedLimitPostsState);

  const onRetweet = () => {
    setFeedList((oldList: IPostItem[]) => [
      ...oldList,
      generateRetweetData(post),
    ]);
  };

  const onQuotePost = () => {
    setQuoteModal({
      opened: true,
      post,
    });
  };

  return (
    <div className="text-slate-400 flex space-x-10 w-full mx-auto pt-2 text-[10px]">
      <button className="icon group flex" onClick={onRetweet} disabled={exceedLimitPosts}>
        <ReplyIcon className="h-5 group-hover:text-blue-400" />
        <p className="group-hover:text-blue-400 mt-1 ml-2">retweet</p>
      </button>
      <button className="icon group flex" onClick={onQuotePost} disabled={exceedLimitPosts}>
        <SwitchHorizontalIcon className="h-5 group-hover:text-green-300" />
        <p className="group-hover:text-green-300 mt-1 ml-2">quote-post</p>
      </button>
    </div>
  );
};

export default FooterPostItem;
