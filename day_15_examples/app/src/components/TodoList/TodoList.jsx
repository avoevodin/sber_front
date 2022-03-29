import { useSelector } from 'react-redux'
import TodoItem from '../TodoItem/TodoItem'

function TodoList() {
  const todos = useSelector((store) => store.todos)
  return (
    <ul className="list-group">
      { todos.length ? todos.map((todo, i) => (
        <TodoItem
          key={todo.id}
          index={i}
          {...todo}
        />
      )) : <p>List empty...</p>}
    </ul>
  )
}

export default TodoList
