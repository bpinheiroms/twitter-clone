import { atom } from 'recoil';
import { IQuoteModalParams } from '../../interfaces';

export const quoteModalState = atom<IQuoteModalParams>({
  key: 'quoteModalState',
  default: {
    opened: false,
  },
});
