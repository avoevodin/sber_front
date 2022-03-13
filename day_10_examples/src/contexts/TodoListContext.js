import { createContext } from "react";
import useTodos from "../hooks/useTodos";

const TodoListContext = createContext();

const TodoListProvider = ({ children }) => {
    const { todos, createTodo, deleteTodo, completeTodo, clearTodos } =
        useTodos();

    return (
        <TodoListContext.Provider
            value={{ todos, createTodo, deleteTodo, completeTodo }}
        >
            {children}
        </TodoListContext.Provider>
    );
};

export default TodoListProvider;

export { TodoListContext };
