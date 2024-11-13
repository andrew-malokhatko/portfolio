import TodoItem from "@/types/todo/TodoItem";
import Status from "@/types/todo/TodoStatus";

const items: TodoItem[] = [
    { id: 1, title: "Complete project documentation", status: Status.TODO, state: "item" },
    { id: 2, title: "Review pull requests", status: Status.InProgress, state: "item" },
    { id: 3, title: "Fix bug in login form", status: Status.Done, state: "item" },
    { id: 4, title: "Update dependencies", status: Status.TODO, state: "item" },
    { id: 5, title: "Write unit tests", status: Status.Done, state: "item"},
    { id: 6, title: "Deploy to Vercel", status: Status.InProgress, state: "item" },
    { id: 7, title: "Commit changes", status: Status.TODO, state: "item" },
];

export default items;