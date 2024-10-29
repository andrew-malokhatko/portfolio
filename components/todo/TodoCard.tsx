import TodoItem from "@/types/todo/TodoItem";
import { GripVertical } from "lucide-react";
import { forwardRef, useState, ChangeEvent, KeyboardEvent } from "react";

interface TodoCardProps {
  item: TodoItem;
  selected?: boolean;
  variant?: "item" | "input"; 
  onTitleChange?: (ItemId: number, newTitle: string) => void;
}

const TodoCard = forwardRef<HTMLDivElement, TodoCardProps>(({ item, selected, variant, onTitleChange }, ref) => {

    const [inputValue, setInputValue] = useState(item.title);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
    };

    const handleInputBlur = () => {
        onTitleChange?.(item.id, inputValue ? inputValue : "New Item");
    }

    const handleInputSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onTitleChange?.(item.id, inputValue);
      }
    };
    return (
      <div
        ref={ref}
        className={`flex items-center bg-background-secondary justify-between rounded-md border border-border-dark px-3 py-5 ${
          selected ? "absolute w-60 pointer-events-none" : ""
        }`}
      >
        {variant === "input" ? (
          <input
            autoFocus={true}
            type="text"
            className="text-foreground text-sm bg-transparent border-none outline-none w-full"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleInputSubmit}
          />
        ) : (
          <p className="text-foreground text-sm whitespace-nowrap overflow-hidden text-ellipsis">
            {item.title}
          </p>
        )}
        <GripVertical className="text-foreground-secondary" size={18} />
      </div>
    );
  }
);
TodoCard.displayName = "TodoCard";
export default TodoCard;
