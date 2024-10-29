import TodoItem from "@/types/todo/TodoItem";
import { GripVertical } from "lucide-react";
import { forwardRef } from "react";

interface TodoCardProps {
  item: TodoItem
  selected?: boolean;
}

const TodoCard = forwardRef<HTMLDivElement, TodoCardProps>(({ item, selected }, ref) => {
  return (
    <div 
      ref={ref}
      className={`flex items-center bg-background-secondary justify-between rounded-md border border-border-dark px-3 py-5 ` + (selected && `absolute w-60 pointer-events-none`)}
    >
      <p className="text-foreground text-sm whitespace-nowrap overflow-hidden text-ellipsis">
        {item.title}
      </p>
      <GripVertical className="text-foreground-secondary" size={18} />
    </div>
  );
}); 

TodoCard.displayName = 'TodoCard';
export default TodoCard;
