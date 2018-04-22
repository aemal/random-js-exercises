import React from 'react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

const Counter = () => {
   return (<Provider store={store}>
        <App />
    </Provider>)
} 

export default Counter;

registerServiceWorker();
