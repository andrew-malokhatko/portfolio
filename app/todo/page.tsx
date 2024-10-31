import TodoBoard from "@/components/todo/TodoBoard";
import items from "@/lib/items";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const Home = () => {
    return (
        <main className="w-full flex flex-col gap-4 mt-[5%] min-h-fit select-none mb-16">

            <Link href="/" className="p-3 rounded-md border w-fit text-center border-border-dark hover:bg-border-dark duration-200" >
                <ArrowLeft></ArrowLeft>
            </Link>
            <TodoBoard items={items}></TodoBoard>
        </main>
    )
}

export default Home;