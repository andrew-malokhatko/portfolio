/*interface TodoBoardProps {
    items: TodoItem[];
}

const TodoBoard: React.FC<TodoBoardProps> = ({ items }) => {
    const [columns, setColumns] = useState<TodoItem[][]>([
        items.filter(item => item.status === Status.TODO),
        items.filter(item => item.status === Status.InProgress),
        items.filter(item => item.status === Status.Done)
    ]);

    const cardRef = useRef<HTMLDivElement>(null);
    const [inputValue, setInputValue] = useState("");
    const [selectedCard, setSelectedCard] = useState<TodoItem | null>(null);
    const [selectedColumn, setSelectedColumn] = useState<Status | null>(null);

    const handleMouseUp = (e: MouseEvent) => {
        relocateSelectedCard(selectedCard, selectedColumn, columns);
        setSelectedCard(null);
    };

    const handleMouseMove = (e: MouseEvent) => {
        setCardPosition(e, cardRef.current);
    };

    const handleMouseDown = (e: MouseEvent) => {
        setCardPosition(e, cardRef.current);
    };

    useEffect(() => {
        if (selectedCard !== null) {
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
        <div className="grid grid-cols-3 w-full min-h-96 gap-3">
            <TodoColumn
                className="text-blue-400"
                title="TODO"
                id={Status.TODO}
                items={columns[Status.TODO]}
                columns={columns}
                setSelectedCard={setSelectedCard}
                setSelectedColumn={setSelectedColumn}
            />
            <TodoColumn
                className="text-yellow-300"
                title="In progress"
                id={Status.InProgress}
                items={columns[Status.InProgress]}
                columns={columns}
                setSelectedCard={setSelectedCard}
                setSelectedColumn={setSelectedColumn}
            />
            <TodoColumn
                className="text-green-300"
                title="Done"
                id={Status.Done}
                items={columns[Status.Done]}
                columns={columns}
                setSelectedCard={setSelectedCard}
                setSelectedColumn={setSelectedColumn}
            />
        </div>
    );
};

export default TodoBoard;
*/