import Status from "@/types/todo/TodoStatus";
import TodoItem from "@/types/todo/TodoItem";
import { randomInt } from "crypto";

export const setCardPosition = (e: MouseEvent | TouchEvent, selectedCard: HTMLElement | null) => {
    if (!selectedCard) return;

    let x: number, y: number;

    if (e instanceof MouseEvent) {
        x = e.clientX;
        y = e.clientY + window.scrollY; 
    } else {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY + window.scrollY;
    }

    // Adjust position to center the card on cursor
    const rect = selectedCard.getBoundingClientRect();
    const offsetX = rect.width / 2;
    const offsetY = rect.height / 2;

    selectedCard.style.left = `${x - offsetX}px`;
    selectedCard.style.top = `${y - offsetY}px`;
};

export const relocateSelectedCard = (selectedCard: TodoItem | null, selectedColumn: Status | null, columns: TodoItem[][]) =>
{
    if (!selectedCard) return

    if (selectedColumn === null)
	{
        columns[selectedCard.status].push(selectedCard);
    }
    else
	{
        console.log(selectedColumn);
        selectedCard.status = selectedColumn;
        columns[selectedColumn].push(selectedCard);
    }
}

export const addCard = (column: Status, columns: TodoItem[][], text: string) => {
	const randomId = Math.floor(Math.random() * (99999999));
    const addItem: TodoItem = {
        id: randomId,
        title: text,
        status: column,
        state: "input",
    }
    columns[column].push(addItem);
}

/*export const deleteCard = (column: Status, columns: TodoItem[][], id: number) => {
    /*columns[column] = columns[column].filter(item => item.id !== id);
}*/

export const todoColumnsData = [
    {
        title: "TODO",
        style: "text-blue-400",
        id: Status.TODO,
    },
    {
        title: "In Progress",
        style: "text-yellow-300",
        id: Status.InProgress,
    },
    {
        title: "Done",
        style: "text-green-300",
        id: Status.Done,
    }
]

