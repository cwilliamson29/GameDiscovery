import useGames, {Game} from "@/hooks/useGames.ts";
import {SimpleGrid, Text} from "@chakra-ui/react";
import GameCard from "@/components/GameCard.tsx";
import GameCardSkeleton from "@/components/GameCardSkeleton.tsx";
import {GameQuery} from "@/App.tsx";

interface Props {
    gameQuery: GameQuery,
    // selectedGenre: Genre | null
    // selectedPlatform: Platform | null
}

function GameGrid({gameQuery}: Props) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const {data, error, loading} = useGames(gameQuery)
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} gap={3} padding={5}>
                {loading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
                {data.map((game: Game) => (
                    <GameCard key={game.id} game={game} selectedPlatform={gameQuery?.platform}/>
                ))}
            </SimpleGrid>
        </div>
    )
}

export default GameGrid
