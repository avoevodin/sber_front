import { useContext } from "react";
import { TodoListContext } from "../../../../contexts/TodoListContext";

const TodoItem = ({ id, text, index, completed }) => {
    const { completeTodo, deleteTodo } = useContext(TodoListContext);
    const deleteHandler = () => deleteTodo(id);
    const completeHandler = () => completeTodo(id);
    return (
        <li className="list-group-item">
            <span className={completed ? "text-muted" : ""}>
                {index + 1}. {text}
            </span>
            <div>
                <button
                    onClick={completeHandler}
                    type="button"
                    className={`btn btn-${completed ? "secondary" : "success"} mx-1`}
                >
                    {completed ? "Undone" : "Done"}
                </button>
                <button
                    onClick={deleteHandler}
                    type="button"
                    className="btn btn-danger"
                >
                    Delete
                </button>
            </div>
        </li >
    );
};

export default TodoItem;
