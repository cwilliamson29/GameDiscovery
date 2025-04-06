import useGames from "@/hooks/useGames.ts";
import {Text} from "@chakra-ui/react";


function GameGrid() {
    const {games, error} = useGames()

    return (
        <div>
            {error && <Text>{error}</Text>}
            {games.map((game) => (
                <div key={game.id}>
                    {game.name}
                </div>
            ))}
        </div>
    )
}

export default GameGrid
