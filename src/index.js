import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.css';

import { createStore } from 'redux'
import mainReducer from './mainReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'

const store = createStore(
  mainReducer,
  composeWithDevTools()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
