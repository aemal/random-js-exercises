import * as filterConsts from '../constants/filterConsts'

const intialState = {
  searchKeyWords: '',
  searchStarsCount: 0,
}


export const filterReducer = (state = intialState, action) => {
  switch (action.type) {
      case filterConsts.SET_SEARCH_KEYWORDS:{
        return({
          ...state,
          searchKeyWords: action.payload.keyWords
        })
      }

      case filterConsts.SET_SEARCH_STARS_COUNT: {
        return({
          ...state,
          searchStarsCount: action.payload.count
        })
      }

    default: {
     return state
   }

  }
}
