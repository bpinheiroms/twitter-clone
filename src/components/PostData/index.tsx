import Moment from 'react-moment';
import { IPostItem } from '../../interfaces';
import { useRouter } from 'next/router';

interface IProps {
  post?: IPostItem;
  children?: any;
  isQuotePostData?: boolean;
}

const PostData: React.FC<IProps> = ({ post, children, isQuotePostData }) => {
  const fontSize = !isQuotePostData
    ? 'text-sm sm:text-[15px]'
    : 'text-[11px] sm:text-[11x]';

  const router = useRouter();

  const onProfileClick = () => {
    const newQuery = { ...router?.query, profile: post?.username };

    router.push({
      pathname: '/',
      query: newQuery,
    });
  };

  return (
    <div>
      {post && (
        <div>
          <div className="flex justify-between">
            <div className="text-slate-400">
              <button className="inline-block group" onClick={onProfileClick}>
                <h4
                  className={`font-bold ${fontSize}  text-slate-200 group-hover:underline inline-block`}>
                  {post.nameUser}
                </h4>
                <span className={`${fontSize} ml-1.5`}>@{post.username}</span>
              </button>
              {' · '}
              <span className={`hover:underline ${fontSize}`}>
                <Moment fromNow>{post.date}</Moment>
              </span>
            </div>
          </div>
          <p
            className={`text-slate-200 mt-0.5 ${
              !isQuotePostData ? 'text-xl' : 'text-md'
            }`}>
            {post.text}
          </p>
          {!!post.quotePostData && (
            <div className="ml-10 bg-neutral-900 p-3 rounded-lg mt-3">
              {children}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PostData;
