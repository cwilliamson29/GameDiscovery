import {Game, Platform} from "@/hooks/useGames.ts";
import {Card, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "@/components/PlatformIconList.tsx";
import CriticScore from "@/components/CriticScore.tsx";
import getCroppedImageUrl from "@/services/image-url.ts";
import GameCardContainer from "@/components/GameCardContainer.tsx";


interface Props {
    game: Game;
    selectedPlatform: Platform | null;
}

const GameCard = ({game, selectedPlatform}: Props) => {
    console.log(game.parent_platforms)
    return (
        <GameCardContainer>
            <Card.Root>
                <Image src={getCroppedImageUrl(game.background_image)} alt={game.name}/>
                <Card.Body>
                    <Heading>{game.name}</Heading>
                    <HStack justifyContent="space-between">
                        {game.parent_platforms !== undefined && <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} selectedPlatform={selectedPlatform}/>}

                        <CriticScore score={game.metacritic}/>
                    </HStack>

                </Card.Body>
            </Card.Root>
        </GameCardContainer>

    )
}

export default GameCard
