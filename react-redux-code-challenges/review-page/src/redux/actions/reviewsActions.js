import * as reviewsConsts from '../constants/reviewsConsts'
import * as filterConsts from '../constants/filterConsts'
import axios from 'axios';

export const setSeacrhKeywords = (keyWords) => {
  return ({
    type: filterConsts.SET_SEARCH_KEYWORDS,
    payload: keyWords
  })
}

export const setSearchedStarsCount = (count) => {
  return ({
    type: filterConsts.SET_SEARCH_STARS_COUNT,
    payload: count
  })
}

export const requestReviews = (page) => {
  return ({
    type: reviewsConsts.REQUEST_REVIEWS,
    payload: true,
    requestedPage: page
  })
}


export const fetchReviews = (page) => (dispatch) => {
    dispatch(requestReviews(page));

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
