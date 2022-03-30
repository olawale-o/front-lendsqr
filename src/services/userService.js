import { post } from '../api';
import { setStorage } from '../storage';
import BASE_URI from '../constants';

export const register = async (credentials) => {
  const { token, user } = await post(`${BASE_URI}/users/register`, { body: credentials });
  setStorage('token', token);
  return [token, user];
}

export const authenticate = async (credentials) => {
  const { token, user } = await post(`${BASE_URI}/users/login`, { body: credentials });
  setStorage('token', token);
  return [token, user];
};
