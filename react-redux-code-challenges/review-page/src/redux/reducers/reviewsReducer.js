import * as reviewsConsts from '../constants/reviewsConsts'

const intialState = {
  fetching: false,
  fetched: false,
  error: '',
  requestedPage: 1,
  reviews: [],
  hasMore: false,
}

export const reviewsReducer = (state = intialState, action) => {
  switch (action.type) {
    case reviewsConsts.REQUEST_REVIEWS: {
      return (
        {...state,
          fetching: action.payload.fetching,
          requestedPage: action.payload.requestedPage
        }
      )
    }

    case reviewsConsts.REVIEWS_FETCHED: {
      return (
        {...state,
          fetching: false,
          fetched: true,
          reviews: state.reviews.concat(action.payload.data.reviews),
          hasMore: action.payload.data.hasMore
        }
      )
    }

      case reviewsConsts.REVIEWS_FETCH_ERROR: {
        return (
            {...state, error: action.payload.err, fetching: false}
        )
      }

    default: {
     return state
   }
  }
}
