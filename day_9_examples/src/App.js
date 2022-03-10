import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  const addNewTodo = (title) => {
    setTodos(prev => [...prev, {
      id: Date.now(),
      title,
      completed: false,
    }])
  }

  return (
    <div className="container my-5">
      <Header addNewTodo={addNewTodo} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
