"use client";

import Tile from "@/types/memory/Tile";
import numberToIcon from "@/types/memory/NumberToIcon";
import { LucideIcon } from "lucide-react";
import "@/styles/flipCard.css"; // Import custom CSS for flip animation

interface MemoryTileProps {
    tile: Tile;
    index: number;
    onClick: (index: number) => void;
}

const MemoryTile = ({ tile, index, onClick }: MemoryTileProps) => {
    const Icon: LucideIcon | null = (tile.isOpened || tile.isMatched) ? numberToIcon[tile.imageNumber] : null;

    return (
        <div 
            className="flip-card w-full aspect-square"
            onClick={() => onClick(index)}
        >
            <div className={`flip-card-inner ${tile.isOpened || tile.isMatched ? "flipped" : ""} w-full h-full duration-500`}>
                
                {/* Front Side of the Card */}
                <div className="absolute w-full h-full flip-card-front flex justify-center items-center bg-background-secondary border border-border-dark rounded-md duration-500 hover:bg-border-dark">
                    <p className="text-white text-xl">?</p>
                </div>
                
                {/* Back Side of the Card */}
                <div className="absolute w-full h-full flip-card-back flex justify-center items-center bg-background-highlight border border-border-dark rounded-md">
                    {Icon && <Icon size={42} />}
                </div>
            </div>
        </div>
    );
};

export default MemoryTile;