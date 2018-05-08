import * as reviewsConsts from '../constants/reviewsConsts'
import * as filterConsts from '../constants/filterConsts'

const intialState = {
  fetching: false,
  fetched: false,
  error: '',
  requestedPage: 1,
  reviews: [],
  hasMore: false,
  searchKeyWords: '',
  searchStarsCount: null
}

export const reviewsReducer = (state = intialState, action) => {
  switch (action.type) {
    case reviewsConsts.REQUEST_REVIEWS:
      return (
        {...state,
          fetching: action.payload,
          requestedPage: action.requestedPage,
        }
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
            {...state, error: action.payload, fetching: false}
        )
        case filterConsts.SET_SEARCH_KEYWORDS:
        return({
          ...state,
          searchKeyWords: action.payload
        })

            case filterConsts.SET_SEARCH_STARS_COUNT:
            return({
              ...state,
              searchStarsCount: action.payload
            })
    default:
     return state

  }
}
