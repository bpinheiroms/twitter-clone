import { ReplyIcon, SwitchHorizontalIcon } from '@heroicons/react/outline';
import { useSetRecoilState } from 'recoil';
import { generateRetweetData } from '../../helper/tweet';
import { IPostItem } from '../../interfaces';
import { feedListState } from '../../store/feed/atoms';

interface IProps {
  post: IPostItem;
}

const FooterPostItem: React.FC<IProps> = ({ post }) => {
  const setFeedList = useSetRecoilState(feedListState);

  const onRetweet = () => {
    setFeedList((oldList: IPostItem[]) => [
      ...oldList,
      generateRetweetData(post),
    ]);
  };

  const onQuotePost = () => {
    console.log('onQuotePost', post);
  };

  return (
    <div className="text-slate-400 flex space-x-10 w-full mx-auto pt-2 text-[10px]">
      <div className="icon group flex" onClick={onRetweet}>
        <ReplyIcon className="h-5 group-hover:text-blue-400" />
        <p className="group-hover:text-blue-400 mt-1 ml-2">retweet</p>
      </div>
      <div className="icon group flex" onClick={onQuotePost}>
        <SwitchHorizontalIcon className="h-5 group-hover:text-green-300" />
        <p className="group-hover:text-green-300 mt-1 ml-2">quote-post</p>
      </div>
    </div>
  );
};

export default FooterPostItem;
