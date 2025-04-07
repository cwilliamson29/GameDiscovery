import {useEffect, useState} from "react";
import apiClient from "@/services/apiClient.ts";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number
    name: string
    released: string
    background_image: string
    parent_platforms: { platform: Platform }[]
    metacritic: number;
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
        console.log(games)
        return () => controller.abort()
    }, []);

    return {games, error}
}