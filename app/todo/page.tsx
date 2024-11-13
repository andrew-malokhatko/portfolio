import TodoBoard from "@/components/todo/TodoBoard";
import items from "@/lib/todo/items";

const Home = () => {
    return (
        <main className="w-full min-h-[calc(100vh-120px)] flex items-center justify-center py-8">
            <TodoBoard items={items}></TodoBoard>
        </main>
    )
}

export default Home;
