import Status from "./TodoStatus";

interface ColumnData {
    id: Status;         // Also stands for an index in columns[]
    title: string;
    style?: string;
}

export default ColumnData;