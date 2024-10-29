import TodoBoard from "@/components/todo/TodoBoard";
import items from "@/lib/items";

const Home = () => {


    return (
        <main className="w-full flex flex-col gap-8 mt-[15%] min-h-fit justify-center items-center select-none mb-12">
            <TodoBoard items={items}></TodoBoard>
        </main>
    )
}

export default Home;