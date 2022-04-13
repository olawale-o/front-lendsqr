import { post, get } from '../api';
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

export const fundAccount = async (id, credentials) => {
  const { user } = await post(`${BASE_URI}/users/${id}/deposit`, { body: credentials });
  return user;
};

export const transfer = async (credentials) => {
  const { transaction } = await post(`${BASE_URI}/transactions/transfer`, { body: credentials });
  return transaction;
};

export const suggestAccount = async (searchTerm) => {
  const { accounts } = await get(`${BASE_URI}/users/account?q=${searchTerm}`);
  return accounts;
};
