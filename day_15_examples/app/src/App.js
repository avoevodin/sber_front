import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { useState } from "react";
import { nanoid } from 'nanoid'

const history = []

function App() {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: nanoid(),
        title,
        completed: false,
      },
    ]);
  };


  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const completedTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const clearTodos = () => {
    history.push(todos)
    setTodos([])
  }

  const returnToPrevState = () => {
    setTodos(history.pop())
  }

  console.log(todos)

  return (
    <div className="container py-5">
      <Header addNewTodo={addNewTodo} />
      <hr />
      <Main completedTodo={completedTodo} deleteTodo={deleteTodo} todos={todos} />
      <Footer returnToPrevState={returnToPrevState} clearTodos={clearTodos} />
    </div>
  );
}

export default App;
