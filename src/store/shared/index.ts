import { recoilPersist } from 'recoil-persist';

const localStorage =
  typeof window !== `undefined` ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
});

export { persistAtom };
