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

    const completeTodo = (id) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        }))
    }

    const deleteTodo = (id) => {
        setTodos(prev => prev.filter((todo) => todo.id !== id))
    }

    const clearTodos = (id) => {
        setTodos([])
    }
    return (
        <TodoListContext.Provider value={{ todos, createTodo }}>
            {children}
        </TodoListContext.Provider>
    );
};

export default TodoListProvider;

export { TodoListContext };
