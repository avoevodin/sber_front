import { nanoid } from 'nanoid'
import {
  ADD_NEW_TODO, CLEAR_ALL_TODOS, COMPLETE_TODO, DELETE_TODO, EDIT_TODO,
} from '../actionTypes/todosTypes'

export const createNewTodo = (title) => ({
  type: ADD_NEW_TODO,
  payload: {
    id: nanoid(),
    title,
    completed: false,
  },
})

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
})

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  payload: id,
})

export const clearAllTodos = () => ({
  type: CLEAR_ALL_TODOS,
})

export const editTodo = (id, newTitle) => ({
  type: EDIT_TODO,
  payload: { id, newTitle },
})
