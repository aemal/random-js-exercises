import * as ratingActionTypes from '../constants/ratingConstants';

const initialState = {
    id: null,
    rate: 0
};

const ratingReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ratingActionTypes.RATING_CLICKED: {
            console.log(payload)
            return({
                ...state,
                id: payload.id,
                rate: payload.rate
            });
        }

        default: {
            return({ state });
        }
    }
};

export default ratingReducer;