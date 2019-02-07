import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'; // This will allow us to inject global
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './store/reducer';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const enhancer = compose(
  applyMiddleware(logger),
  /**
   * Conditionally add the Redux DevTools extension enhancer
   * if it is installed.
   */
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

//Build the store
const store = createStore(reducer, enhancer);

//Pass store to provider so it will be available for entire application
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
