import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'

const App = () => {
  const [counter, setCounter] = useState(0)
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
    </div>
  )
}

export default App
