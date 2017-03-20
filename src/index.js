import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.css';

import { createStore, applyMiddleware } from 'redux'
import mainReducer from './mainReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'

const logger = createLogger();
const store = createStore(
  mainReducer,
  composeWithDevTools(
    applyMiddleware(logger)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
