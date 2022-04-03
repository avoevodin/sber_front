import { combineReducers } from 'redux'
import phonesReducer from './phonesReducer'

const rootReducer = combineReducers({
  phones: phonesReducer,
})

export default rootReducer
