import {useEffect, useState} from "react";
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

export default function useGames() {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        const controller = new AbortController()
        apiClient.get<FetchGamesResponse>("/games")
            .then(res => setGames(res.data.results))
            .catch(err => setError(err.message))

        return () => controller.abort()
    }, []);

    return {games, error}
}