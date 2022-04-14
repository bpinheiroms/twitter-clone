import { atom } from 'recoil';
import { feedListMock } from '../../data';
import { IFeedFilter, IPostItem } from '../../interfaces';
import { persistAtom } from '../shared';

export const feedListState = atom<IPostItem[]>({
  key: 'feedListState',
  default: feedListMock,
  effects_UNSTABLE: [persistAtom],
});

export const feedListFilterState = atom<IFeedFilter>({
  key: 'feedListFilterState',
  default: {
    isFollowing: false,
    searchText: '',
  },
});
