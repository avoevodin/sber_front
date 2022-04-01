import { useDispatch } from 'react-redux'
import { completeTodo, deleteTodo } from '../../redux/actionCreators/todosActionCreators'

function TodoItem({
  id, title, completed, index,
}) {
  const dispatch = useDispatch()

  const deleteHandler = () => {
    dispatch(deleteTodo(id))
  }

  const completedHandler = () => {
    dispatch(completeTodo(id))
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className={completed ? 'text-muted' : ''}>
        {index + 1}
        .
        {title}
      </span>

      <div>
        <button onClick={completedHandler} type="button" className={`btn btn-${completed ? 'secondary' : 'success'} mx-1`}>{completed ? 'Undone' : 'Done'}</button>
        <button onClick={deleteHandler} type="button" className="btn btn-danger mx-1">Delete</button>
      </div>
    </li>
  )
}

export default TodoItem
