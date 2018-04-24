import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import logger from 'redux-logger';

const createStoreWithMiddleWare = applyMiddleware(logger)(createStore);
const Store = createStoreWithMiddleWare(reducer);

export default Store;