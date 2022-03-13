const TodoItem = (id, text, index, completed) => {
    return (
        <li className="list-group-item">
            <span>
                {index + 1}. {text}
            </span>
            <div>
                <button type="button" class="btn btn-success">Success</button>
                <button type="button" class="btn btn-danger">Danger</button>
            </div>
        </li>
    )
}

export default TodoItem
