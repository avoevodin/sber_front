import TodoList from "../ TodoList/TodoList";

const Main = ({ todos, deleteTodo, completeTodo }) => {
    return (
        <div>
            <TodoList
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
                todos={todos}
            />
        </div>
    );
};

const AnotherInMain = () => {
    return <div>Another info</div>;
};

export default Main;

export { AnotherInMain };
