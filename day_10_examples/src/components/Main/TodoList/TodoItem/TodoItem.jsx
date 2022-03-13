import { useContext } from "react"
import { TodoListContext } from "../../../../contexts/TodoListContext"

const TodoItem = (id, text, index, completed) => {
    const { completeTodo, deleteTodo } = useContext(TodoListContext)
    const deleteHandler = () => deleteTodo(id)
    const completeHandler = () => deleteTodo(completed)
    return (
        <li className="list-group-item">
            <span>
                {index + 1}. {text}
            </span>
            <div>
                <button onClick={completeHandler} type="button" class="btn btn-success">Success</button>
                <button onClick={deleteHandler} type="button" class="btn btn-danger">Danger</button>
            </div>
        </li>
    )
}

export default TodoItem
