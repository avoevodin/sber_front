import { SET_SEARCH_VALUE } from '../types/searchTypes'

// eslint-disable-next-line import/prefer-default-export
export const setSearchValue = (newSearchValue) => ({
  type: SET_SEARCH_VALUE,
  payload: newSearchValue,
})
