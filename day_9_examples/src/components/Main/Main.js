import TodoList from "../ TodoList/TodoList"

const Main = () => {

    return (
        <div>
            <TodoList />
        </div>
    )
}

const AnotherInMain = () => {
    return (
        <div>
            Another info
        </div>
    )
}

export default Main

export {
    AnotherInMain
}