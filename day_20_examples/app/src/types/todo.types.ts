type TodoId = string | number;

export interface Todo {
    id: TodoId;
    title: string;
    completed: boolean;
    text?: string;
}

// eslint-disable-next-line no-shadow
export enum TodosActionTypes {
    // eslint-disable-next-line no-unused-vars
    ADD_NEW_TODO = 'ADD_NEW_TODO',
    // eslint-disable-next-line no-unused-vars
    DELETE_TODO = 'DELETE_TODO'
}

export interface AddNewTodoAction {
    type: TodosActionTypes;
    payload: Todo;
}

export interface DeleteTodoAction {
    type: TodosActionTypes;
    payload: Todo['id'];
}

export type TodosActions = AddNewTodoAction | DeleteTodoAction
