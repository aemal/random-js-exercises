import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import ratingReducer from './ratingReducer';
import wunderListReducer from './wunderListReducer';

export default combineReducers({
    todoReducer,
    ratingReducer,
    wunderListReducer
});