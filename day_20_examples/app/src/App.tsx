/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Todo from './types/todo.types'

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

  const deleteHandler = (id: Todo['id']) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <div className="App">
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
  )
}

export default App
