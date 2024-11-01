import State from "@/types/connect-4/State";
import Cell from "@/types/connect-4/Cell";
import { Star } from "lucide-react";

interface Connect4CellProps {
    cell: Cell;
}

const Connect4Cell = ({cell}: Connect4CellProps) => {
    return (
        <div className={`w-full h-full flex justify-center items-center aspect-square rounded-md border border-border-dark
            ${cell.state === State.Black ? `bg-background-highlight ` :  ``}
            ${cell.state === State.White ? `bg-foreground-secondary ` :  ``} `}
        >
            {
                cell.isWinnerCell && 
                <Star size={30} />
            }
        </div>
    );
}

export default Connect4Cell