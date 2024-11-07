import Tile from "@/types/memory/Tile"

export const ROWS = 4
export const COLUMNS = 4

const shuffleArray = <T>(array: T[]): T[] =>
{
    for (let i = array.length - 1; i > 0; i--)
    {
        const newPosition = Math.floor(Math.random() * (array.length - 1));
        [array[i], array[newPosition]] = [array[newPosition], array[i]]
    }
    return array;
}

const generateTileValues = (): number[] =>
{
    const originalValues = Array.from({length: ROWS * COLUMNS / 2}, (item, it) => (it));
    const pairedValues = originalValues.concat(originalValues);

    return shuffleArray(pairedValues);
}

export const fillBoard = (board: Tile[]): Tile[] =>
{
    const values = generateTileValues();

    for (let i = 0; i < board.length; i++)
    {
        board[i] = {
            isOpened: false,
            isMatched: false,
            imageNumber: values[i],
        } as Tile;
    }
    return board;
}

export const gameEnd = (board: Tile[]): boolean =>
{
    for (const tile of board)
    {
        if (!tile.isMatched)
        {
            return false;
        }
    }
    return true;
}

export const getWinMessageIndex = (whiteScore: number, blackScore: number) =>
{
    if (whiteScore > blackScore)
    {
        return 0;
    }
    else if (blackScore > whiteScore)
    {
        return 1;
    }
    else
    {
        return 2;
    }
}

/*export const onGameEnd = (board: Tile[]) =>
{
    if (gameEnd(board))
    {
        fillBoard();
    }
}*/
