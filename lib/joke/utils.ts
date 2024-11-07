import JokeResponse from "@/types/joke/JokeResponse";

export const getJoke = async (url: string) => {
    try
    {
        const response = await fetch(url)
        if (!response.ok)
        {
            throw new Error(`JokeAPI Error, response status: ${response.status}`);
        }
        const data: JokeResponse = await response.json();
        return data;
    }
    catch(error)
    {
        console.error(`Could not fetch data: ${error}`)
    }
}