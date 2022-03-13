import { useContext } from "react"
import { TodoListContext } from "../../../../contexts/TodoListContext"

const TodoItem = (id, text, index, completed) => {
    const { completeTodo, deleteTodo } = useContext(TodoListContext)
    const deleteHandler = () => deleteTodo(id)
    const completeHandler = () => completeTodo(completed)
    return (
        <li className="list-group-item">
            <span>
                {index + 1}. {text}
            </span>
            <div>
                <button onClick={completeHandler} type="button" className="btn btn-success">Done</button>
                <button onClick={deleteHandler} type="button" className="btn btn-danger">Delete</button>
            </div>
        </li>
    )
}

export default TodoItem
