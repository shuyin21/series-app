import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { configureStore } from '@reduxjs/toolkit';

// import { createStore } from 'redux';
// import allReducer from './redux/reducers/index.js';
import userReducer from './features/users';
import { Provider } from 'react-redux';


const store = configureStore({
  reducer: {
    user: userReducer,

  },
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

