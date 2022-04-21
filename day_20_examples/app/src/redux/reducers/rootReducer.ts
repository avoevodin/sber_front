/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux'
import { todosReducer } from './todosReducer'

export const rootReducer = combineReducers({
  todos: todosReducer,
})
