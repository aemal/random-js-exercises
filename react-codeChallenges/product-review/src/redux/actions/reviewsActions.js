import * as reviewsConsts from '../constants/reviewsConsts'
import axios from 'axios';

export const requestReviews = () => {
  return ({
    type: reviewsConsts.REQUEST_REVIEWS,
    payload: true
  })
}


export const fetchReviews = (page) => (dispatch) => {
    dispatch(requestReviews());

    return (
           axios.get(`https:sellics-frontend-test.herokuapp.com/reviews/${page}`, { crossdomain: true })
            .then(res => dispatch({
                type: reviewsConsts.REVIEWS_FETCHED,
                payload: res.data
            }))
            .catch((err) => dispatch({
                type: reviewsConsts.REVIEWS_FETCH_ERROR,
                payload: err
            }))
        );
      }
