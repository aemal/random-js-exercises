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
  searchStarsCount: null,
  filtering: false,
  filteredReviews: []
}

export const reviewsReducer = (state = intialState, action) => {
  switch (action.type) {
    case reviewsConsts.REQUEST_REVIEWS:
      return (
        {...state,
          fetching: action.payload,
          requestedPage: action.requestedPage,
          searchKeyWords: '',
          searchByStars: null,
          searchStarsCount: null,
          filtering: false,}
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
          searchKeyWords: action.payload,
          filtering: true
        })

        case filterConsts.SEARCH_BY_KEYWORDS:
        const FilteredStarsArray = state.reviews.filter(review => {
            return review.stars === state.searchStarsCount
          })

        let ArrayToFilter = state.searchStarsCount !== null
        ? FilteredStarsArray
        : state.reviews
        let filteredArrayByKeywords =  ArrayToFilter.filter(review => {
            return review.title.indexOf(action.payload) !== -1
          }).map(review => {
            return review
          })
            return ({
              ...state,
              filtering: true,
              filteredReviews: filteredArrayByKeywords
            })

            case filterConsts.SET_SEARCH_STARS_COUNT:
            return({
              ...state,
              searchStarsCount: action.payload,
              filtering: true
            })

            case filterConsts.SEARCH_BY_STARS:
            let filteredArrayByStars =  state.reviews.filter(review => {
                return review.stars === action.payload
              }).filter(review => {
                  return review.title.indexOf(state.searchKeyWords) !== -1
                }).map(review => {
                return review
              })
                return ({
                  ...state,
                  filtering: true,
                  filteredReviews: filteredArrayByStars
                })
    default:
     return state

  }
}
