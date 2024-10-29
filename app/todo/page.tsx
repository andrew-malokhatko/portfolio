"use client"

import TodoColumn from "@/components/todo/TodoColumn";
import items from "@/lib/items";
import TodoItem from "@/types/todo/TodoItem";
import Status from "@/types/todo/TodoStatus";
import React, { useState, useEffect, useRef } from "react";
import { addCard, setCardPosition, relocateSelectedCard } from "@/lib/todo/utils";
import TodoCard from "@/components/todo/TodoCard";

const Home = () => {
    const [columns, setColumns] = useState<TodoItem[][]>([
        items.filter(item => item.status === Status.TODO),
        items.filter(item => item.status === Status.InProgress),
        items.filter(item => item.status === Status.Done)
    ]);

    const cardRef = useRef<HTMLDivElement>(null);
    const [inputValue, setInputValue] = useState("");

    const [selectedCard, setSelectedCard] = useState<TodoItem | null>(null);
    const [selectedColumn, setSelectedColumn] = useState<Status | null>(null)


    const handleMouseUp = (e: MouseEvent) => {
        relocateSelectedCard(selectedCard, selectedColumn, columns);
        setSelectedCard(null);
    };

    const handleMouseMove = (e: MouseEvent) => {
        setCardPosition(e, cardRef.current);
    };

    const handleMouseDown = (e: MouseEvent) => {
        setCardPosition(e, cardRef.current);
    }

    useEffect(() => {
        if (selectedCard !== null)
        {
            window.addEventListener('mousedown', handleMouseDown);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('mousemove', handleMouseMove);
        }
        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [selectedCard, selectedColumn]);

    const handleAddCard = () => {
        if (inputValue.trim()) {
            addCard(Status.TODO, columns, inputValue);
            setInputValue("");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleAddCard();
        }
    };

    return (
        <main className="w-full flex flex-col gap-8 mt-[20%] min-h-fit justify-center items-center select-none mb-12">
            {selectedCard &&
                <TodoCard selected ref={cardRef} item={selectedCard} />
            }
            
            <div className="grid grid-cols-3 w-full min-h-96 gap-3">
                <TodoColumn
                    className="text-blue-400"
                    title = "TODO"
                    id = {Status.TODO}
                    items={columns[Status.TODO]}
                    columns={columns}
                    setSelectedCard={setSelectedCard}
                    setSelectedColumn={setSelectedColumn}
                />
                <TodoColumn
                    className="text-yellow-300"
                    title = "In progress"
                    id= {Status.InProgress}
                    items={columns[Status.InProgress]}
                    columns={columns}
                    setSelectedCard={setSelectedCard}
                    setSelectedColumn={setSelectedColumn}
                />
                <TodoColumn
                    className="text-green-300"
                    title = "Done"
                    id = {Status.Done}
                    items={columns[Status.Done]}
                    columns={columns}
                    setSelectedCard={setSelectedCard}
                    setSelectedColumn={setSelectedColumn}
                />
            </div>
            <div className="flex items-center gap-2 p-2">
                <input className="bg-background-secondary text-sm focus:outline-none px-2 py-1 rounded-md"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={handleAddCard} className="text-sm border border-border-dark px-2 py-1 rounded-md">Add Card</button>
            </div>
        </main>
    )
}

export default Home;