import State from "@/types/connect-4/State";

interface Connect4CellProps {
    state: State
}

const Connect4Cell = ({state}: Connect4CellProps) => {
    return (
        <div className={`w-full h-full aspect-square rounded-md border border-border-dark
            ${state === State.Black ? `bg-background-highlight ` :  ``}
            ${state === State.White ? `bg-foreground-secondary ` :  ``} `}
        >
            
        </div>
    );
}

export default Connect4Cell