import {useEffect, useState} from 'react'
import apiClient from "@/services/apiClient.ts";

function GameGrid() {
    const [games, setGames] = useState([])
    //const [error, setError] = useState('')

    useEffect(() => {
        console.log(import.meta.env.VITE_API_KEY)
        apiClient.get("/games")
            .then(res => setGames(res.data))
            .catch(err => console.log(err))
    }, []);
    return (
        <div>{games}</div>
    )
}

export default GameGrid
