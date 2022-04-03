import './App.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import { updateAllTodos } from './redux/actionCreators/todosActionCreators'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateAllTodos(3))
  }, [])

  return (
    <div className="container py-5">
      <Header />
      <hr />
      <Main />
      <Footer />
    </div>
  )
}

export default App
