import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist();

const currentUser = atom({
  key: 'currentUser',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export default currentUser;
