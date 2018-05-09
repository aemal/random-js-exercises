import * as reviewsConsts from '../constants/reviewsConsts'
import axios from 'axios';

export const requestReviews = (page) => {
  return ({
    type: reviewsConsts.REQUEST_REVIEWS,
    payload: {
      fetching: true,
      requestedPage: page
    }
  })
}

export const fetchReviews = (page) => (dispatch) => {
    dispatch(requestReviews(page));

    return (
           axios.get(`https:sellics-frontend-test.herokuapp.com/reviews/${page}`, { crossdomain: true })
            .then(res => dispatch({
                type: reviewsConsts.REVIEWS_FETCHED,
                payload: {
                  data: res.data
                }
            }))
            .catch((err) => dispatch({
                type: reviewsConsts.REVIEWS_FETCH_ERROR,
                payload: { err }
            }))
        );
      }
