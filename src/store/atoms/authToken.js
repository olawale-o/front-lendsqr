import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist();

const authToken = atom({
  key: 'authToken',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export default authToken;
