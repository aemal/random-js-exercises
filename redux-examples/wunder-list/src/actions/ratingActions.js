import * as ratingActionTypes from '../constants/ratingConstants.js';

export const ratingClicked = (id, rate) => {
    return ({ 
        type: ratingActionTypes.RATING_CLICKED, 
        payload: { id, rate }
    });
}