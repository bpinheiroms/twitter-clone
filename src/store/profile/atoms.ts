import { atom } from 'recoil';
import { listUsersMock } from '../../data';
import { IUsers } from '../../interfaces';
import { persistAtom } from '../shared/index';

export const followingListState = atom<number[]>({
  key: 'followingListState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const userListState = atom<IUsers[]>({
  key: 'userListState',
  default: listUsersMock,
  effects_UNSTABLE: [persistAtom],
});
