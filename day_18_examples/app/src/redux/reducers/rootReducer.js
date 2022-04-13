import { combineReducers } from 'redux'
import postReducer from './postReducer'
import { searchReducer } from './searchReducer'

const rootReducer = combineReducers({
  posts: postReducer,
  search: searchReducer,
})

export default rootReducer
