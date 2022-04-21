/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { useAppDispatch } from './hooks/useAppDispatch'
import { useAppSelector } from './hooks/useAppSelector'
import { deleteTodoAc } from './redux/actionCreators/todosAC'
import { Todo } from './types/todo.types'

// const initTodosState: Todo[] = [{
//   id: Date.now(),
//   title: 'First todos',
//   completed: false,
// }]]

const App = () => {
  const [counter, setCounter] = useState(0)
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 'dkfajdsfkajsdfdsaf',
      title: 'First todos',
      completed: false,
      text: 'Text for first todo',
    },
    {
      id: Date.now(),
      title: 'Second todos',
      completed: true,
    },
  ])

  const dispatch = useAppDispatch()

  const deleteHandler = (id: Todo['id']) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const reduxTodos = useAppSelector((store) => store.todos)

  const reduxDeleteHandler = (id: Todo['id']) => {
    dispatch(deleteTodoAc(id))
  }

  return (
    <div className="App">
      <div>
        <h1>React state</h1>
        <Header title="Title in header" version={1} />
        Counter:
        {' '}
        {counter}
        <br />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCounter((prev) => prev + 1)}
        >
          Change counter
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />
        {todos.map((todo) => (
          <div key={todo.id}>
            Title:
            {' '}
            {todo.title}
            <br />
            Completed:
            {' '}
            {todo.completed ? 'done' : 'undone'}
            {todo.text && (
            <>
              <br />
              Text:
              {' '}
              {todo.text}
            </>
            )}
            <br />
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => deleteHandler(todo.id)}
            >
              Delete
            </button>
            <br />
            <br />
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <h1>Redux state</h1>
        {reduxTodos.map((todo) => (
          <div key={todo.id}>
            Title:
            {' '}
            {todo.title}
            <br />
            Completed:
            {' '}
            {todo.completed ? 'done' : 'undone'}
            {todo.text && (
            <>
              <br />
              Text:
              {' '}
              {todo.text}
            </>
            )}
            <br />
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => reduxDeleteHandler(todo.id)}
            >
              Delete
            </button>
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
