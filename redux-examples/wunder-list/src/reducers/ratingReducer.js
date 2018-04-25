import * as ratingActionTypes from '../constants/ratingConstants';

 const initialState = [];

const ratingReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ratingActionTypes.RATING_CLICKED :
        let existingItem = state.filter(item => {
               return item.id === payload.id
             });
             const newState =  existingItem.length === 0
              ?  [payload, ...state]
              : state.map(item =>
                item.id === payload.id ?
                { ...item, rate: payload.rate }
              : item );
             return (newState)



        default:
            return state;
    }
};

export default ratingReducer;