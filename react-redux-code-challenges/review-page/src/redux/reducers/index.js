import { combineReducers } from 'redux'

//Reducers
import {reviewsReducer} from './reviewsReducer'

export const reducer = combineReducers({
  reviews: reviewsReducer,
})
