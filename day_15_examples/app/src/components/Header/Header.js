import Form from '../Form/Form'
import styles from './styles.module.css'

const Header = ({addNewTodo}) => {




	return (
		<header>
				<Form addNewTodo={addNewTodo} />
		</header>
	)
}

export default Header