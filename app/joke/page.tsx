"use client"

import { useState } from "react"
import { getJoke } from "@/lib/joke/utils";
import JokeResponse from "@/types/joke/JokeResponse";

const Home = () => 
{
    const [setup, setSetup] = useState<string>("");
    const [delivery, setDelivery] = useState<string>("");

    const getNewJoke = async () =>
        {
        const url = "https://v2.jokeapi.dev/joke/Misc,Programming,Pun,Spooky,Christmas"
        const jokeData: JokeResponse | undefined =  await getJoke(url);
        if (jokeData && jokeData.error == false)
        {
            console.log("fetched joke")
            if (jokeData.joke)
            {
                console.log(`joke is now ${jokeData.joke}`)
                setSetup(jokeData.joke);
                setDelivery("");
            }
            else if (jokeData.setup && jokeData.delivery)
            {
                console.log(`setup is now ${jokeData.setup}`)
                console.log(`delivery is now ${jokeData.delivery}`)
                setSetup(jokeData.setup);
                setDelivery(jokeData.delivery);
            }

            return;
        }
        setSetup("Could not load a joke :( API problems");
        setDelivery("");
    }

    return (
        <main className="w-full min-h-[calc(100vh-120px)] flex items-center justify-center py-8">
            <div className='flex flex-col gap-10 items-center'>
                <button className='bg-border-dark px-5 py-2 text-lg text-foreground' onClick={getNewJoke}>
                    Get a Joke 😁
                </button>
                <div className="flex flex-col gap-4 max-w-[600px] text-center">
                    <h2 className="text-xl text-foreground-secondary">{setup}</h2>
                    <h2 className="text-xl font-bold text-foreground">{delivery}</h2>
                </div>
            </div>
        </main>
    )
}

export default Home