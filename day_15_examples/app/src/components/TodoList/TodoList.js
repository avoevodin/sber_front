import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, deleteTodo, completedTodo }) => {
  return (
    <ul className="list-group">
      { todos.length ? todos.map((todo, i) => {
        return (
          <TodoItem
						key={todo.id}
            deleteTodo={deleteTodo}
						completedTodo={completedTodo}
            index={i}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        );
      }) : <p>List empty...</p>}
    </ul>
  );
};

export default TodoList;
