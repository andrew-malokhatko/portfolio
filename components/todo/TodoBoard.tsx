"use client"

import TodoColumn from "@/components/todo/TodoColumn";
import items from "@/lib/items";
import TodoItem from "@/types/todo/TodoItem";
import Status from "@/types/todo/TodoStatus";
import { useState, useEffect, useRef } from "react";
import {todoColumnsData, addCard, setCardPosition, relocateSelectedCard } from "@/lib/todo/utils";
import TodoCard from "@/components/todo/TodoCard";

interface TodoBoardProps {
    items: TodoItem[];
}

const TodoBoard: React.FC<TodoBoardProps> = ({ items }) => {
    const [columns, setColumns] = useState<TodoItem[][]>([
        items.filter(item => item.status === Status.TODO),
        items.filter(item => item.status === Status.InProgress),
        items.filter(item => item.status === Status.Done)
    ]);

    const cardRef = useRef<HTMLDivElement>(null);

    const [selectedCard, setSelectedCard] = useState<TodoItem | null>(null);
    const [selectedColumn, setSelectedColumn] = useState<Status | null>(null);

    const handleMouseUp = (e: MouseEvent) => {
        relocateSelectedCard(selectedCard, selectedColumn, columns);
        setSelectedCard(null);
    };

    const handleMouseMove = (e: MouseEvent) => {
        setCardPosition(e, cardRef.current);
    };

    const handleCardSelect = (e: MouseEvent) => {
        setCardPosition(e, cardRef.current);
    };

    useEffect(() => {
        if (selectedCard !== null) {
            window.addEventListener('mousedown', handleCardSelect);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('mousemove', handleMouseMove);
        }
        return () => {
            window.removeEventListener('mousedown', handleCardSelect);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [selectedCard, selectedColumn]);

    return (

            <div className="grid grid-cols-3 w-full min-h-96 gap-3">
                {selectedCard &&
                    <TodoCard selected ref={cardRef} item={selectedCard} />
                    }
                {todoColumnsData.map((columnData) =>
                (
                    <TodoColumn
                    key={columnData.id}
                    columnData={columnData}
                    columns={columns}
                    setSelectedCard={setSelectedCard}
                    setSelectedColumn={setSelectedColumn}
                    />
                    ))}
            </div>

    );
};

export default TodoBoard;
