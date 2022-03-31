import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import api from './api';
import { getStorage } from './storage';
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
})

api.interceptors.request.use((config) => {
  const token = getStorage('token');
  const requestConfig = { ...config };
  if (token) {
    requestConfig.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use((response) => response, (error) => {
  throw error;
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
