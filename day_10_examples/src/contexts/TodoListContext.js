import { createContext, useState } from "react";

const TodoListContext = createContext();

const TodoListProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const createTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTodos(prev => [...prev, newTodo])
    };

    return (
        <TodoListContext.Provider value={{ todos, createTodo }}>
            {children}
        </TodoListContext.Provider>
    );
};

export default TodoListProvider;

export { TodoListContext };
