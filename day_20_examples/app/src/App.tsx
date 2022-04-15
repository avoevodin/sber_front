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
  const [todos, setTodos] = useState<Todo[]>([{
    id: Date.now(),
    title: 'First todos',
    completed: false,
  }])
  console.log(setTodos)
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
        </div>
      ))}
    </div>
  )
}

export default App
