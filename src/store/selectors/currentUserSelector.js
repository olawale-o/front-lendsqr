import { selector } from 'recoil';
import currentUser from '../atoms/currentUser';

const currentUserSelector = selector({
  key: 'currentUserSelector',
  get: ({ get }) => get(currentUser),
});

export default currentUserSelector;
