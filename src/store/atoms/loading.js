import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist();

const loading = atom({
  key: 'loading',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export default loading;
