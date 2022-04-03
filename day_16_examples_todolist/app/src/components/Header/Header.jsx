import Form from '../Form/Form'
// import styles from './styles.module.css'

function Header({ addNewTodo }) {
  return (
    <header>
      <Form addNewTodo={addNewTodo} />
    </header>
  )
}

export default Header
