import { combineReducers } from 'redux'

//Reducers
import {reviewsReducer} from './reviewsReducer'
import { filterReducer } from './filterReducer'


export const reducer = combineReducers({
  reviews: reviewsReducer,
  filters: filterReducer
})
