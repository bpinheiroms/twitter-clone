import { ChangeEvent, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { generateTweetData } from '../../helper/tweet';
import { IPostItem } from '../../interfaces';
import { feedListState } from '../../store/feed';

const PostInput = () => {
  const [postMessage, setPostMessage] = useState('');
  const [totalCharacters] = useState(777);
  const [charactersAvailable, setCharactersAvailable] =
    useState(totalCharacters);

  const setTodoList = useSetRecoilState(feedListState);

  const onChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    setCharactersAvailable(totalCharacters - value.length);
    setPostMessage(value);
  };

  const onSubmit = () => {
    setPostMessage('');

    setTodoList((oldList: IPostItem[]) => [
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

        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center">
            <span
              className={`text-slate-400 text-[11px] ${
                charactersAvailable === 0 ? 'text-red-300' : 'text-green-300'
              }`}>
              {charactersAvailable} characters available
            </span>
          </div>
          <button
            onClick={onSubmit}
            disabled={postMessage === ''}
            className="bg-blue-500 text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-blue-700 disabled:hover:bg-blue-300 disabled:opacity-50 disabled:cursor-default">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostInput;
