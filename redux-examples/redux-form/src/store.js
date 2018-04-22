import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

const createStoreWithMiddleWare = applyMiddleware(ReduxThunk, logger)(createStore);
const Store = createStoreWithMiddleWare(reducer);

export default Store;