import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store'
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  <Provider store={store}>
    <AppRouter/>
  </Provider>,
  document.getElementById('root')
);

