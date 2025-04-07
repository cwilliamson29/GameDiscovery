import useGames from "@/hooks/useGames.ts";
import {SimpleGrid, Text} from "@chakra-ui/react";
import GameCard from "@/components/GameCard.tsx";
import GameCardSkeleton from "@/components/GameCardSkeleton.tsx";


function GameGrid() {
    const {games, error, loading} = useGames()
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} gap={10} padding={10}>
                {loading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
                {games.map((game) => (
                    <GameCard key={game.id} game={game}/>
                ))}
            </SimpleGrid>
        </div>
    )
}

export default GameGrid
