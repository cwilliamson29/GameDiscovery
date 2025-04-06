import {useEffect, useState} from 'react'
import apiClient from "@/services/apiClient.ts";

interface Game {
    id: number
    name: string
    released: string
}

interface FetchGamesResponse {
    count: number
    results: Game[]
}

function GameGrid() {
    const [games, setGames] = useState<Game[]>([])
    //const [error, setError] = useState('')

    useEffect(() => {
        //console.log(import.meta.env.VITE_API_KEY)
        apiClient.get<FetchGamesResponse>("/games")
            .then(res => setGames(res.data.results))
            .catch(err => console.log(err))
    }, []);
    return (
        <div>
            {games.map((game) => (
                <div key={game.id}>
                    {game.name}
                </div>
            ))}
        </div>
    )
}

export default GameGrid
