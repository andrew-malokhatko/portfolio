"use client"

import TodoColumn from "@/components/todo/TodoColumn";
import items from "@/lib/todo/items";
import TodoItem from "@/types/todo/TodoItem";
import Status from "@/types/todo/TodoStatus";
import { useState, useEffect, useRef } from "react";
import {todoColumnsData, setCardPosition, relocateSelectedCard } from "@/lib/todo/utils";
import TodoCard from "@/components/todo/TodoCard";
import { Trash } from "lucide-react";

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
        if (selectedColumn !== Status.Delete)
        {
            relocateSelectedCard(selectedCard, selectedColumn, columns);
        }
        setSelectedCard(null);
    };

    const handleMouseMove = (e: MouseEvent) => {
        setCardPosition(e, cardRef.current);
    };

    /*const handleCardDelete = () => {
        if (!selectedCard) return;
        deleteCard(selectedCard.status, columns, selectedCard.id)
    }*/

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

    const handleOnMouseOver = (e: React.MouseEvent) => {
        setSelectedColumn(Status.Delete);
    }

    const handleOnouseLeave = (e: React.MouseEvent) => {
        setSelectedColumn(null);
    }

    return (
        <div className="flex flex-col gap-3">
            <div className={`group w-full transition h-32 rounded-md justify-center flex bg-background-secondary
                            ${selectedCard != null ? "hover:bg-background-highlight": ""}`}
                onMouseOver={(e) => handleOnMouseOver(e)}
                onMouseLeave={(e) => handleOnouseLeave(e)}
            >
                <Trash className={`p-2 h-full w-auto text-border-dark `}></Trash>
            </div>

            <div className="grid grid-cols-3 w-full min-h-[400px] gap-3">
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
        </div>
    );
};

export default TodoBoard;
