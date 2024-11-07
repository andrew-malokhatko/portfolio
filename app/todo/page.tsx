import TodoBoard from "@/components/todo/TodoBoard";
import items from "@/lib/items";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const Home = () => {
    return (
        <main className="w-full min-h-[calc(100vh-120px)] flex items-center justify-center py-8">
            <TodoBoard items={items}></TodoBoard>
        </main>
    )
}

export default Home;
