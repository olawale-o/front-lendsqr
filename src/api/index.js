import axios from 'axios';
import BASE_URI from '../constants';

const api = axios.create({ baseURL: BASE_URI });

export const post = async (uri, options = {}) => {
  const { body = {} } = options;
  const response = await api.post(uri, body);
  return response.data;
};

export const get = async (uri, signal = undefined) => {
  let response = null;
  if (signal) {
    response = await api.get(uri, { signal });
    return response.data;
  }
  response = await api.get(uri);
  return response.data;
};

export default api;
