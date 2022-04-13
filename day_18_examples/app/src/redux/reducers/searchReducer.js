/* eslint-disable default-param-last */
import { SET_SEARCH_VALUE } from '../types/searchTypes'

const searchReducer = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return action.payload

    default:
      return state
  }
}

export default searchReducer
