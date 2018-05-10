import * as filterConsts from '../constants/filterConsts'

export const setSeacrhedKeywords = (keyWords) => {
  return ({
    type: filterConsts.SET_SEARCH_KEYWORDS,
    payload: { keyWords }
  })
}

export const setSearchedStarsCount = (count) => {
  return ({
    type: filterConsts.SET_SEARCH_STARS_COUNT,
    payload: { count }
  })
}

export const setSortBy = (sortBy) => {
  return ({
    type: filterConsts.SET_SORT_BY,
    payload: { sortBy }
  })
}

export const setGroupBy = (groupBy) => {
  return({
    type: filterConsts.SET_GROUP_BY,
    payload: { groupBy }
  })
}

export const refreshFilter = () => {
  return ({
    type: filterConsts.REFRESH_FILTER
  })
}
