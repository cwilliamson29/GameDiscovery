import useGames, {Game, Platform} from "@/hooks/useGames.ts";
import {SimpleGrid, Text} from "@chakra-ui/react";
import GameCard from "@/components/GameCard.tsx";
import GameCardSkeleton from "@/components/GameCardSkeleton.tsx";
import {Genre} from "@/hooks/useGenres.ts";

interface Props {
    selectedGenre: Genre | null
    selectedPlatform: Platform | null
}

function GameGrid({selectedGenre, selectedPlatform}: Props) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const {data, error, loading} = useGames(selectedGenre, selectedPlatform)
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} gap={3} padding={5}>
                {loading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
                {data.map((game: Game) => (
                    <GameCard key={game.id} game={game} selectedPlatform={selectedPlatform}/>
                ))}
            </SimpleGrid>
        </div>
    )
}

export default GameGrid
