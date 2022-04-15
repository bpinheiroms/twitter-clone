import { atom } from 'recoil';
import { IProfileModalParams, IQuoteModalParams } from '../../interfaces';

export const quoteModalState = atom<IQuoteModalParams>({
  key: 'quoteModalState',
  default: {
    opened: false,
  },
});

export const profileModalState = atom<IProfileModalParams>({
  key: 'profileModalState',
  default: {
    opened: false,
    username: '',
  },
});
