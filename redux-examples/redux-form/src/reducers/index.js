import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import { reducer as frmCounterValue } from 'redux-form'

export default combineReducers({
    counterState: counterReducer,
    frmCounterValue
});
