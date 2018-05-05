import * as reviewsConsts from '../constants/reviewsConsts'

const intialState = {
  fetching: false,
  fetched: false,
  error: '',
  requestedPage: 1,
  reviews: [],
  hasMore: false
}

export const reviewsReducer = (state = intialState, action) => {
  switch (action.type) {
    case reviewsConsts.REQUEST_REVIEWS:
      return (
        {...state, fetching: action.payload, requestedPage: action.requestedPage }
      );
    case reviewsConsts.REVIEWS_FETCHED:
      return (
        {...state,
          fetching: false,
          fetched: true,
          reviews: state.reviews.concat(action.payload.reviews),
          hasMore: action.payload.hasMore
        }
      )
      case reviewsConsts.REVIEWS_FETCH_ERROR:
        return (
            {...state, error: action.payload.message, fetching: false}
        )
    default:
     return state

  }
}
