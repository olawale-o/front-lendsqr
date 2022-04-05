import { selector } from 'recoil';
import loading from '../atoms/loading';

const loadingSelector = selector({
  key: 'loadingSelector',
  get: ({ get }) => get(loading),
});

export default loadingSelector;
