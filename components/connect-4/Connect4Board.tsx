"use client"
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import Cell from "@/types/connect-4/Cell";
import State from "@/types/connect-4/State";
import { ROWS, COLUMNS, fillBoard, getSelectedColumn, addToColumn, checkGameOver, setWinningCells } from "@/lib/connect-4/utils";
import Connect4Cell from "./Connect4Cell";
import { RotateCcw } from "lucide-react";

// index 0 for white, 1 for black
const endGameMessages = ["White won", "Black won", "Draw"];
const moveMessages = ["Black to move: ", "White to move: "];
const newGameMessage = "New Game";

const Connect4Board = () => {

    const [board, setBoard] = useState<Cell[]>(() => (
        fillBoard(new Array(ROWS * COLUMNS))
    ))

    const [moveColor, setMoveColor] = useState<State>(State.White)
    const [message, setMessage] = useState<string>("White to move");
    const [gameRunning, setGameRunning] = useState<boolean>(true);

    const boardRef = useRef<HTMLDivElement>(null);

    const handleBoardMouseDown = (e: React.MouseEvent) => {
        const column = getSelectedColumn(boardRef, e.pageX, e.pageY);
        if (gameRunning && column !== false)
        {
            console.log("Got selected column")
            const addSuccess = addToColumn(board, setBoard, column, moveColor);
            if (addSuccess)
            {
                const gameResult = checkGameOver(board, addSuccess[0], addSuccess[1], moveColor);
                if (gameResult !== false)
                {
                    setGameRunning(false);

                    if (gameResult == 'draw')
                    {
                        setMessage(endGameMessages[-1]);
                        return;
                    }

                    setBoard([...setWinningCells(board, gameResult)]);
                    setMessage(endGameMessages[moveColor]);
                    return;
                }

                // Change move color from 1 to 0 and viceversa
                setMoveColor(1 - moveColor);
                setMessage(moveMessages[moveColor]);
            }
        }
    }

    const startNewGame = () => {
        setBoard([...fillBoard(board)]);
        setGameRunning(true);
        setMoveColor(State.White);
        setMessage(newGameMessage)
    }

    return (
        <div className="flex flex-1 justify-between items-end">
            <div className="w-4/6 h-full flex flex-col gap-3">
                {
                    message && <h4 className='text-center text-lg'>
                        {message}
                    </h4>
                }
                {/*
                    !gameRunning && <RotateCcw size={50} className="absolute top-[50%] left-[50%]"></RotateCcw>
                */}
                <div
                    ref={boardRef}
                    className=" grid gap-1 grid-cols-7 grid-rows-6"
                    onMouseDown={handleBoardMouseDown}
                    >
                    {board.map((cell, index) => (
                        <Connect4Cell cell={cell} key={index}></Connect4Cell>
                        ))}
                </div>
            </div>

            <div>
                <button
                    className="border border-border-dark rounded-md px-5 py-4 hover:bg-background-highlight duration-200"
                    onClick={startNewGame}
                >
                    Start new game
                </button>
            </div>
        </div>
    );
}

export default Connect4Board