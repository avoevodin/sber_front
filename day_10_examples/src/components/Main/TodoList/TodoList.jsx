import { useContext } from "react"
import { TodoListContext } from "../../../contexts/TodoListContext"
import TodoItem from "./TodoItem/TodoItem"

const TodoList = () => {
    const { todos } = useContext(TodoListContext)

    return (
        <ul class="list-group">
            {todos.map((todo, i) => {
                <TodoItem id={todo.id} index={i} text={todo.text} completed={todo.completed} />
            })}
        </ul>
    )
}

export default TodoList
