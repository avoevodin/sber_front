import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNewTodo } from '../../redux/actionCreators/todosActionCreators'

function Form() {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()
  const changeHandler = (e) => {
    setTitle(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const newTitle = title.trim()
    if (newTitle) {
      dispatch(createNewTodo(newTitle))
      setTitle('')
    }
  }

  return (
    <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
      <div className="mb-3">
        <input
          onChange={changeHandler}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Text here..."
          value={title}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Todo
      </button>
    </form>
  )
}

export default Form
