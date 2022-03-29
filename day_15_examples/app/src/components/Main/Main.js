import TodoList from "../TodoList/TodoList"

const Main = ({todos, deleteTodo, completedTodo}) => {


	return (
		<div>
			<TodoList completedTodo={completedTodo} deleteTodo={deleteTodo} todos={todos} />	
		</div>
	)
}

function AnotherComponentInMain () {
	return (
		<div>
			AnotherComponentInMain
		</div>
	)
}

export default Main

export {
	AnotherComponentInMain
}