import { useState } from "react"

const Form = ({ addNewTodo }) => {

    const [title, setTitle] = useState("")
    const changeHandler = (e) => {
        setTitle(e.target.value)
    }
    return (
        <form className="d-flex flex-column align-items-center">
            <div className="mb-3">
                <input type="email" className="form-control" value={title} onChange={changeHandler} />
            </div>
            <button type="submit" className="btn btn-primary">Add Todo</button>
        </form>
    )
}

export default Form