"use client"

import TodoItem from "@/types/todo/TodoItem";
import Status from "@/types/todo/TodoStatus";
import ColumnData from "@/types/todo/ColumnData";
import TodoCard from "./TodoCard";
import { Plus } from "lucide-react";
import { addCard } from "@/lib/todo/utils";
import { cn } from "@/lib/utils";

interface TodoColumnProps {
    columnData: ColumnData;
    columns: TodoItem[][];
    setSelectedCard: React.Dispatch<React.SetStateAction<TodoItem | null>>;
    setSelectedColumn: React.Dispatch<React.SetStateAction<Status | null>>;
}


const TodoColumn = ({columnData, columns, setSelectedCard, setSelectedColumn}: TodoColumnProps) => {

    const handleOnDragStart = (e: React.MouseEvent, card: TodoItem) => {
        setSelectedCard(card);
        columns[columnData.id] = columns[columnData.id].filter(item => item.id !== card.id);
    }

    const handleOnMouseOver = (e: React.MouseEvent) => {
        setSelectedColumn(columnData.id);
        
    }

    const handleOnMouseLeave = (e: React.MouseEvent) => {
        setSelectedColumn(null);
    }

    const handleAddOnClick = (e: React.MouseEvent) => {
        addCard(columnData.id, columns, "");
        setSelectedColumn(null);
    }

    const onItemTitleChange = (itemId: number, newTitle: string) => {
        columns[columnData.id] = columns[columnData.id].map(item =>
            item.id === itemId ? { ...item, title: newTitle, state: "item" } : item
        );
        setSelectedColumn(null);
    }

    return (
        <div
            className={`flex flex-col gap-2 border-border-dark rounded-md p-2 w-64 bg-background-secondary ` +  columnData.style}
            onMouseOver={(e) => handleOnMouseOver(e)}
            onMouseLeave={(e) => handleOnMouseLeave(e)}
        >
            <h4 className=" text-xl font-bold mb-2 px-1"><span className="text-md text-text-shadow"> {columnData.id}. </span>{columnData.title}</h4>
            {columns[columnData.id].map((item) =>
            (
                <div key={item.id} onMouseDown={(e) => handleOnDragStart(e, item)}>
                    <TodoCard variant={item.state} onTitleChange={onItemTitleChange} item={item}></TodoCard>
                </div>
            ))}
            <div className="mb-10 flex items-center">
                <button onClick={handleAddOnClick} className="text-text-shadow hover:text-foreground-secondary text-sm px-2">Add Card</button>
                <Plus size={18}></Plus> 
            </div>
        </div>
    )
}

export default TodoColumn;