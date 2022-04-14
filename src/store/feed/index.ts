import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { feedListMock } from '../../data';
import {  IPostItem } from '../../interfaces';

const localStorage =
  typeof window !== `undefined` ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
});

export const feedListState = atom<IPostItem[]>({
  key: 'feedListState',
  default: feedListMock,
  effects_UNSTABLE: [persistAtom],
});
