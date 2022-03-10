import styles from './styles.module.css'
import Form from '../Form/Form'

const Header = ({ addNewTodo }) => {

    return (
        <header>
            <Form addNewTodo={addNewTodo} />
        </header>
    )
}

export default Header