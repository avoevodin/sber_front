/* eslint-disable import/prefer-default-export */
/* eslint-disable default-param-last */
import { Todo, TodosActions, TodosActionTypes } from '../../types/todo.types'

const initTodosState: Todo[] = [
  {
    id: 'fdfaldfkj',
    title: 'First Redux todo',
    completed: false,
    text: 'Text for first Redux todo',
  },
  {
    id: Date.now(),
    title: 'Second Redux todo',
    completed: true,
  },
]

export const todosReducer = (state = initTodosState, action: TodosActions) => {
  switch (action.type) {
    case TodosActionTypes.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload)

    default:
      return state
  }
}
