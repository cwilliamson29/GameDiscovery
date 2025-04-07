import {Game} from "@/hooks/useGames.ts";
import {Card, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "@/components/PlatformIconList.tsx";
import CriticScore from "@/components/CriticScore.tsx";
import getCroppedImageUrl from "@/services/image-url.ts";
import GameCardContainer from "@/components/GameCardContainer.tsx";


interface Props {
    game: Game;
}

const GameCard = ({game}: Props) => {

    return (
        <GameCardContainer>
            <Card.Root>
                <Image src={getCroppedImageUrl(game.background_image)} alt={game.name}/>
                <Card.Body>
                    <Heading>{game.name}</Heading>
                    <HStack justifyContent="space-between">
                        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                        <CriticScore score={game.metacritic}/>
                    </HStack>

                </Card.Body>
            </Card.Root>
        </GameCardContainer>

    )
}

export default GameCard
