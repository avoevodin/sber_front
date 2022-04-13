/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { SET_SEARCH_VALUE } from '../types/searchTypes'

export const searchReducer = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return action.payload

    default:
      return state
  }
}
