import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useState } from 'react'
import { nanoid } from 'nanoid'

const history = []

function App() {
  const [todos, setTodos] = useState([])

  const addNewTodo = (title) => {
    setTodos(prev => [...prev, {
      id: nanoid(),
      title,
      completed: false,
    }])
  }

  const deleteTodo = (id) => {
    history.push(todos)
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const completeTodo = (id) => {
    history.push(todos)
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo
    }))
  }

  const clearTodos = () => {
    history.push(todos)
    setTodos([])
  }

  const returnToPrevState = () => {
    if (history.length) setTodos(history.pop())
  }
  return (
    <div className="container my-5">
      <Header addNewTodo={addNewTodo} />
      <Main deleteTodo={deleteTodo} completeTodo={completeTodo} todos={todos} />
      <hr />
      <Footer returnToPrevState={returnToPrevState} clearTodos={clearTodos} />
    </div>
  );
}

export default App;
