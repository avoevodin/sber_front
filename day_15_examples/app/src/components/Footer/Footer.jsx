// import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
import { clearAllTodos } from '../../redux/actionCreators/todosActionCreators'

function Footer() {
  const dispatch = useDispatch()

  const clearHandler = () => {
    dispatch(clearAllTodos())
  }
  return (
    <footer className="d-flex mt-5 justify-content-center">
      <button onClick={clearHandler} type="button" className="btn btn-danger mx-1">Delete All</button>
    </footer>
  )
}

export default Footer
