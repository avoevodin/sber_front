import styles from './styles.module.css'
import Form from '../Form/Form'
import React from 'react'

const Header = ({ addNewTodo }) => {

    return (
        <header>
            <Form addNewTodo={addNewTodo} />
        </header>
    )
}

// memo is a decorator which provide component not to update when it gets the same props
export default React.memo(Header)