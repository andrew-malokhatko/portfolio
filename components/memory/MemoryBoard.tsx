"use client"

import { useState } from "react"
import { fillBoard, ROWS, COLUMNS, gameEnd, getWinMessageIndex } from "@/lib/memory/utils"
import MemoryTile from "./MemoryTile"
import Tile from "@/types/memory/Tile"

const winMessages = ["White Won", "Black Won", "Draw"]

const MemoryBoard = () => {
    const [tiles, setTiles] = useState<Tile[]>(() => (
        fillBoard(new Array(ROWS * COLUMNS))
    ))

    const [whiteToMove, setWhiteToMove] = useState<boolean>(true);
    const [openedTiles, setOpenedTiles] = useState<number[]>([]);
    const [animationRunning, setAnimationRunning] = useState<boolean>(false);

    const [whiteScore, setWhiteScore] = useState<number>(0);
    const [blackScore, setBlackScore] = useState<number>(0);

    const [winMessage, setWinMessage] = useState<string>("");

    const tileOnClick = (index: number) => {
        if (tiles[index].isOpened === false && tiles[index].isMatched === false && animationRunning === false)
        {    
            openedTiles.push(index)

            tiles[index].isOpened = true;
            console.log(openedTiles);

            if (openedTiles.length === 2)
            {
                if (tiles[openedTiles[0]].imageNumber === tiles[openedTiles[1]].imageNumber)
                {
                    tiles[openedTiles[0]].isMatched = true;
                    tiles[openedTiles[1]].isMatched = true;
                    
                    setWhiteScore(prev => whiteToMove === true ? prev + 1: prev);
                    setBlackScore(prev => whiteToMove === false ? prev + 1: prev);

                    if (gameEnd(tiles))
                    {
                        newGame();
                    }
                }
                else
                {
                    setAnimationRunning(true);

                    setTimeout(() => {
                        setAnimationRunning(false);
                        tiles[openedTiles[0]].isOpened = false;
                        tiles[openedTiles[1]].isOpened = false;
                    }, 500);
                    setWhiteToMove(prev => !prev);
                }
                
                setOpenedTiles([]);
                return;
            }
            
            setTiles([...tiles]);
            setOpenedTiles([...openedTiles])
        }
    }

    const newGame = () => {
        setWinMessage(winMessages[getWinMessageIndex(whiteScore, blackScore)]);
                        
        setTimeout(() => {
            setBlackScore(0);
            setWhiteScore(0);
            setWinMessage("");
            setTiles(fillBoard(tiles));
        }, 3000)
    }

    return (
        <div className="flex flex-row w-full justify-between">
            <div className='w-4/6 gap-2 grid grid-cols-4 grid-rows-4'>
                {tiles.map((tile, index) => (
                    <MemoryTile
                    key={index}
                    tile={tile}
                    index = {index}
                    onClick = {tileOnClick}
                    />
                    ))}
            </div>

            <div className="w-1/4 h-full flex flex-col justify-between text-start gap-4 text-base">
                <div className="flex flex-col gap-2">
                    <span className="mb-10">{whiteToMove ? "White" : "Black"} to move</span>
                    <span>White: {whiteScore}</span>
                    <span>Black: {blackScore}</span>
                </div>

                <span className="text-lg">{winMessage}</span>

                <button
                    className="border border-border-dark rounded-md py-3 hover:bg-background-highlight duration-200"
                    onClick={newGame}
                >
                    New Game
                </button>
            </div>
        </div>
    )
}

export default MemoryBoard