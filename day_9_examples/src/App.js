import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useState, useCallback, useMemo } from 'react'
import { nanoid } from 'nanoid'

const history = []

// expensive function for demonstrating of usign useMemo hook
function evaluateManyRandomNums(todos_length) {

  for (let i = 0; i < 2e8; i++) {
    Math.random()
  }

  return todos_length
}

function App() {
  const [todos, setTodos] = useState([])

  // useCallback with empty dependeces list allow to create function 
  // only one time at the mounting process. It only works with React.memo
  // HOC (high order components).
  const addNewTodo = useCallback((title) => {
    setTodos(prev => [...prev, {
      id: nanoid(),
      title,
      completed: false,
    }])
  }, [])

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

  // in this case dependence is required because the todos are created on mountain
  // and history stores the first version of todos object without the dependence.
  const clearTodos = useCallback(() => {
    history.push(todos)
    setTodos([])
  }, [todos])

  const returnToPrevState = useCallback(() => {
    if (history.length) setTodos(history.pop())
  }, [])

  // useMemo hook allows not to evaluate the return value of some function
  // when dependence isn't changed. The value in this case will be returned
  // from previous call of that function.
  const dataFromExpensiveFunction = useMemo(() => {
    return evaluateManyRandomNums(todos.length)
  }, [todos.length])

  return (
    <div className="container my-5">
      <Header addNewTodo={addNewTodo} />
      <Main deleteTodo={deleteTodo} completeTodo={completeTodo} todos={todos} />
      <hr />
      <Footer returnToPrevState={returnToPrevState} clearTodos={clearTodos} />
      Data from expensive function: {dataFromExpensiveFunction}
    </div>
  );
}

export default App;
