import { ChangeEvent, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { generateQuotePostData, generateTweetData } from '../../helper/tweet';
import { IPostItem } from '../../interfaces';
import { feedListState } from '../../store/feed/atoms';
import { exceedLimitPostsState } from '../../store/feed/selectors';
import { quoteModalState } from '../../store/modals/atoms';
import PostData from '../PostData';

interface IProps {
  isFromModal?: boolean;
}

const PostInput: React.FC<IProps> = ({ isFromModal }) => {
  const [postMessage, setPostMessage] = useState('');
  const [totalCharacters] = useState(777);
  const [charactersAvailable, setCharactersAvailable] =
    useState(totalCharacters);

  const setFeedList = useSetRecoilState(feedListState);
  const exceedLimitPosts = useRecoilValue(exceedLimitPostsState);

  const [quoteModal, setQuoteModal] = useRecoilState(quoteModalState);

  const onChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    setCharactersAvailable(totalCharacters - value.length);
    setPostMessage(value);
  };

  const onSubmit = () => {
    setPostMessage('');

    if (isFromModal) {
      const { post } = quoteModal;

      if (post) {
        setFeedList((oldList: IPostItem[]) => [
          ...oldList,
          generateQuotePostData(postMessage, post),
        ]);

        setQuoteModal({
          opened: false,
          post: undefined,
        });
      }

      return;
    }

    setFeedList((oldList: IPostItem[]) => [
      ...oldList,
      generateTweetData(postMessage),
    ]);
  };

  return (
    <div className="border-b border-gray-700 p-3 flex space-x-3 scrollbar-hide">
      <div className="divide-y divide-gray-700 w-full">
        <div className="space-y-2.5">
          <textarea
            placeholder="What's happening?"
            onChange={onChangeValue}
            value={postMessage}
            maxLength={totalCharacters}
            className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
          />
        </div>
        {isFromModal && quoteModal.post && (
          <div className="ml-10 bg-neutral-900 p-3 rounded-lg mb-5 mt-5">
            <PostData post={quoteModal.post} isQuotePostData />
          </div>
        )}

        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center">
            {exceedLimitPosts ? (
              <span className="text-[11px] text-red-300">
                You have exceeded the limit of 5 daily posts. Come back
                tomorrow!
              </span>
            ) : (
              <span
                className={` text-[11px] ${
                  charactersAvailable === 0 ? 'text-red-300' : 'text-green-300'
                }`}>
                {charactersAvailable} words available
              </span>
            )}
          </div>

          <button
            onClick={onSubmit}
            disabled={postMessage === '' || exceedLimitPosts}
            className="bg-blue-500 text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-blue-700 disabled:hover:bg-blue-300 disabled:opacity-50 disabled:cursor-default">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostInput;
