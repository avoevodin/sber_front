import {
  ADD_NEW_TODO, CLEAR_ALL_TODOS, COMPLETE_TODO, DELETE_TODO, EDIT_TODO,
} from '../actionTypes/todosTypes'

// eslint-disable-next-line default-param-last
const todosReducer = (store = [], action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      return [...store, action.payload]
    case DELETE_TODO:
      return store.filter((todo) => todo.id !== action.payload)
    case CLEAR_ALL_TODOS:
      return []
    case COMPLETE_TODO:
      return store.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    case EDIT_TODO:
      return store.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
          }
        }
        return todo
      })
    default:
      return store
  }
}

export default todosReducer
