/* eslint-disable import/prefer-default-export */
import { DeleteTodoAction, Todo, TodosActionTypes } from '../../types/todo.types'

export const deleteTodoAc = (id: Todo['id']): DeleteTodoAction => ({
  type: TodosActionTypes.DELETE_TODO,
  payload: id,
})
