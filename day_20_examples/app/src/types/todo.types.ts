type TodoId = string | number;

export default interface Todo {
    id: TodoId;
    title: string;
    completed: boolean;
    text?: string;
}
