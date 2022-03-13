import { useEffect, useState } from "react";

const LSTodosKey = 'todos'

const useTodos = () => {
    const [todos, setTodos] = useState([]);

    const createTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTodos((prev) => [...prev, newTodo])
    };

    const completeTodo = (id) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
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

    useEffect(() => {
        const dataFromLS = JSON.parse(localStorage.getItem(LSTodosKey))
        if (dataFromLS) {
            setTodos(dataFromLS)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(LSTodosKey, JSON.stringify(todos))
    }, [todos])

    return {
        todos,
        createTodo,
        deleteTodo,
        completeTodo,
        clearTodos,
    }
}

export default useTodos
