import * as filterConsts from '../constants/filterConsts'

const intialState = {
  searchKeyWords: '',
  searchStarsCount: 0,
  sortBy:  {
    value: '',
    text: 'Sort By'
  },
  groupBy: {
    value: '',
    text: 'Group by'
  },
  Grouping: false
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

      case filterConsts.SET_SORT_BY: {
        return({
          ...state,
          sortBy: action.payload.sortBy
        })
      }

      case filterConsts.SET_GROUP_BY: {
        const GroupingRes = action.payload.groupBy !== ''
            ? true
            : false
        return({
          ...state,
          groupBy: action.payload.groupBy,
          Grouping: GroupingRes
        })
      }

      case filterConsts.REFRESH_FILTER: {
        return ({
          searchKeyWords: '',
          searchStarsCount: 0,
          sortBy: {
            value: '',
            text: 'Sort By'
          },
          groupBy: {
            value: '',
            text: 'Group By'
          },
          Grouping: false
        });
      }

    default: {
     return state
   }

  }
}
