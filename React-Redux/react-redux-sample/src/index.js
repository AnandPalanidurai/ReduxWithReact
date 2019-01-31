import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'; // This will allow us to inject global
import {createStore} from 'redux'; //Build the store
import reducer from './store/reducer';

const store = createStore(reducer);

//Pass store to provider so it will be available for entire application
ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'))



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
