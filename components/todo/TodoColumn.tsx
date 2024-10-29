"use client"

import TodoItem from "@/types/todo/TodoItem";
import Status from "@/types/todo/TodoStatus";
import TodoCard from "./TodoCard";;

interface TodoColumnProps {
    title: string;
    id: Status;         // Also stands for an index in columns[]
    items: TodoItem[];
    columns: TodoItem[][];
    setSelectedCard: React.Dispatch<React.SetStateAction<TodoItem | null>>;
    setSelectedColumn: React.Dispatch<React.SetStateAction<Status | null>>;
    className?: string;
}

const TodoColumn = ({title, id, items, columns, setSelectedCard, setSelectedColumn, className}: TodoColumnProps) => {

    const handleOnDragStart = (e: React.MouseEvent, removeItem: TodoItem) => {
        setSelectedCard(removeItem);
        columns[id] = columns[id].filter(item => item.id !== removeItem.id);
    }

    const handleOnDragOver = (e: React.MouseEvent) => {
        setSelectedColumn(id);
        //(e.currentTarget as HTMLElement).style.backgroundColor = 'rgb(17 17 17)'; // slate-800
    }

    const handleOnDragLeave = (e: React.MouseEvent) => {
        setSelectedColumn(null);
        //(e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
    }

    return (
        <div
            className={`flex flex-col gap-2 border-border-dark rounded-md p-2 w-64 bg-background-secondary ` + className}
            onMouseOver={(e) => handleOnDragOver(e)}
            onMouseLeave={(e) => handleOnDragLeave(e)}
        >
            <h4 className=" text-xl font-bold mb-2 px-1"><span className="text-md text-text-shadow">{id}. </span>{title}</h4>
            {items.map((item) => (
                <div key={item.id} onMouseDown={(e) => handleOnDragStart(e, item)}>
                    <TodoCard item={item}></TodoCard>
                </div>
            ))}
            <div className="mb-10" />
        </div>
    )
}

export default TodoColumn;