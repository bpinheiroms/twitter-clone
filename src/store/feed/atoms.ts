import { atom } from 'recoil';
import { feedListMock } from '../../data';
import { IPostItem } from '../../interfaces';
import { persistAtom } from '../shared';

export const feedListState = atom<IPostItem[]>({
  key: 'feedListState',
  default: feedListMock,
  effects_UNSTABLE: [persistAtom],
});

export const feedListFilterState = atom<boolean>({
  key: 'feedListFilterState',
  default: false,
});
