import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './main/App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import storeConfig from './config/store';


axios.interceptors.request.use((config) => {
  config.baseURL = 'http://localhost:3010';
  config.withCredentials = true;
  return config;
});

ReactDOM.render(
  <Provider store={storeConfig()}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
