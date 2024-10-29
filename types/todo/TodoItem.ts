import Status from "./TodoStatus";

interface TodoItem {
    id: number;
    title: string;
    status: Status;
    state?: "item" | "input";
}

export default TodoItem;