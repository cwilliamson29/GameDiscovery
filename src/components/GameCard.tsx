import {Game} from "@/hooks/useGames.ts";
import {Card, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "@/components/PlatformIconList.tsx";
import CriticScore from "@/components/CriticScore.tsx";
import getCroppedImageUrl from "@/services/image-url.ts";


interface Props {
    game: Game;
}

const GameCard = ({game}: Props) => {

    return (
        <>
            <Card.Root width="300px" borderRadius={10} overflow="hidden">
                <Image src={getCroppedImageUrl(game.background_image)} alt={game.name}/>
                <Card.Body>
                    <Heading>{game.name}</Heading>
                    <HStack justifyContent="space-between">
                        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                        <CriticScore score={game.metacritic}/>
                    </HStack>

                </Card.Body>
            </Card.Root>
        </>

    )
}

export default GameCard
