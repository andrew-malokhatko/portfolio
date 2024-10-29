import Status from "./TodoStatus";

interface TodoItem {
    id: number;
    title: string;
    status: Status;
}

export default TodoItem;