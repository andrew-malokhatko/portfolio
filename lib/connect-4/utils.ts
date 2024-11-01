import Cell from "@/types/connect-4/Cell";
import State from "@/types/connect-4/State";

export const ROWS = 6
export const COLUMNS = 7

export const getCellIndex = (x: number, y: number) =>
{
    return (x + y * COLUMNS);
}

export const fillBoard = (board: Cell[]) =>
{
    for (let i = 0; i < ROWS * COLUMNS; i++)
    {
        board[i] = {
            state: State.Empty,
            isWinnerCell: false,
        }
    }

    return board;
}

export const getSelectedColumn = (board: React.RefObject<HTMLDivElement>, x: number, y: number) =>
{
    if (board.current === null) return false
    
    x = x - board.current.offsetLeft;
    y = y - board.current.offsetTop;

    let colSize = (board.current.offsetWidth / COLUMNS);

    return Math.floor(x / colSize);
}

export const addToColumn = (board: Cell[], setBoard: React.Dispatch<React.SetStateAction<Cell[]>>, column: number, addedState: State) =>
{
    let addSuccess = false;
    let row  = ROWS - 1

    for (row; row >= 0; row--)
    {
        if (board[getCellIndex(column, row)].state === State.Empty)
        {
            board[getCellIndex(column, row)].state = addedState;
            addSuccess = true;
            break;
        }
    }

    if (addSuccess)
    {
        setBoard(board);
        return [column, row];
    }
    
    return false;
}
export const checkGameOver = (board: Cell[], lastMoveX: number, lastMoveY: number, playerState: State) => {
    const directions = [
        [[0, 1], [0, -1]], // vertical
        [[1, 0], [-1, 0]], // horizontal
        [[1, 1], [-1, -1]], // diagonal \
        [[1, -1], [-1, 1]] // diagonal /
    ];

    // add cell from the last move, as it is not considered in the algorithm
    let winnerCells = [[lastMoveX, lastMoveY]];

    for (const [dir1, dir2] of directions) {
        let count = 1; // counting the last move itself

        for (const [dx, dy] of [dir1, dir2]) {
            let x = lastMoveX + dx;
            let y = lastMoveY + dy;

            while (
                count < 4 && 
                x >= 0 && x < COLUMNS && 
                y >= 0 && y < ROWS && 
                board[getCellIndex(x, y)].state === playerState
            ) {
                winnerCells.push([x, y])
                count++;
                x += dx;
                y += dy;
            }
        }

        if (count >= 4) {
            console.log(winnerCells);
            return winnerCells;
        }

        // reset the array if the winning sequence was not found
        winnerCells = [[lastMoveX, lastMoveY]];
    }

    const isBoardFull = board.every(cell => cell.state !== State.Empty);
    if (isBoardFull) {
        return 'draw';
    }

    return false;
}


export const setWinningCells = (board: Cell[], winnerCells: number[][]) =>
{
    for (const [x, y] of winnerCells)
    {
        board[getCellIndex(x, y)].isWinnerCell = true;
    }

    return board;
}