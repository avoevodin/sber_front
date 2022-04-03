import { nanoid } from 'nanoid'
import {
  ADD_NEW_TODO, CLEAR_ALL_TODOS, COMPLETE_TODO, DELETE_TODO, EDIT_TODO, UPDATE_ALL_TODOS,
} from '../actionTypes/todosTypes'
import { LOCAL_STORAGE_KEY } from '../store'

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

export const updateAllTodos = (count = 5) => async (dispatch) => {
  let initData = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY))
  if (!initData) {
    initData = await fetch(`https://jsonplaceholder.typicode.com/todos/?_limit=${count}`)
      .then((res) => res.json())
      .then((dataFromWeb) => (dataFromWeb))
    dispatch({
      type: UPDATE_ALL_TODOS,
      payload: initData,
    })
  }
}
