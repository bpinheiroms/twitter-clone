import { IPostItem } from '../interfaces';
import { getFeedList } from '../services/feed';
import useGet from './useGet';

const useGetFeedList = () => {
  return useGet<IPostItem[]>(getFeedList);
};

export default useGetFeedList;
