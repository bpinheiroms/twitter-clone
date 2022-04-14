import { generateTweetData } from '../helper/tweet';
import { ICreateTweet, IPostItem, StorageKeys } from '../interfaces';
import { getStorageItem, setStorageItem } from '../libs/storage';

const getFeedList = () => {
  const listFeed = getStorageItem<IPostItem[] | null>(StorageKeys.FEED_LIST);
  return listFeed ?? [];
};

const createTweet = (tweet: ICreateTweet) => {
  const data = generateTweetData(tweet.text);

  const list = getFeedList();
  list.push(data);

  setStorageItem(StorageKeys.FEED_LIST, list);
};

export { getFeedList, createTweet };
