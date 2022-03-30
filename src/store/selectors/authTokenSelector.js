import { selector } from 'recoil';
import authToken from '../atoms/authToken';

const authTokenSelector = selector({
  key: 'authTokenSelector',
  get: ({ get }) => get(authToken),
});

export default authTokenSelector;

