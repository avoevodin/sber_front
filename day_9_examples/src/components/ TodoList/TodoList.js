import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
    return (
        <div>
            <ul className="list-group mt-3">
                {todos.length ?
                    todos.map((todo, i) => {
                        return (
                            <TodoItem
                                key={todo.id}
                                deleteTodo={deleteTodo}
                                completeTodo={completeTodo}
                                index={i}
                                id={todo.id}
                                title={todo.title}
                                completed={todo.completed}
                            />
                        );
                    })
                    : <p>List empty...</p>
                }
            </ul>
        </div>
    );
};

export default TodoList;
