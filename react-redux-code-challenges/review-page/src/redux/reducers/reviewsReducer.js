import * as reviewsConsts from '../constants/reviewsConsts'
import { CrosErrorMessage } from '../../const/errorMessages'
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
        let error = action.payload.err.message
        console.warn(CrosErrorMessage)
        return (
            {...state, error, fetching: false}
        )
      }

    default: {
     return state
   }
  }
}
