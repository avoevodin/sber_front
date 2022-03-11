import { useState } from "react";

const Form = ({ addNewTodo }) => {
  const [title, setTitle] = useState("");

  const changeHandler = (e) => {

    setTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault()
    const newTitle = title.trim()

    if (newTitle) {
      addNewTodo(newTitle)
      setTitle('')
    }
  }

  return (
    <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={changeHandler}
          placeholder="text here... "
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Todo
      </button>
    </form>
  );
};

export default Form;
