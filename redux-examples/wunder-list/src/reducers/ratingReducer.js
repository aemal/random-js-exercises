import * as ratingActionTypes from '../constants/ratingConstants';

 const initialState = [
  {
    id: 2,
    rate: 4
  }, ]

const ratingReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ratingActionTypes.RATING_CLICKED :
            return state.map(item => {
                if(item.id === payload.id) {
                return {...item, rate:payload.rate}
             }
             return {

                    payload
        };
});
        default:
            return state;
    }
};

export default ratingReducer;