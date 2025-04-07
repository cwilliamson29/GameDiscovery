import {Game} from "@/hooks/useGames.ts";
import {Card, Heading, Image} from "@chakra-ui/react";
import PlatformIconList from "@/components/PlatformIconList.tsx";


interface Props {
    game: Game;
}

const GameCard = ({game}: Props) => {

    return (
        <>
            <Card.Root borderRadius={10} overflow="hidden">
                <Image src={game.background_image} alt={game.name}/>
                <Card.Body>
                    <Heading>{game.name}</Heading>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                </Card.Body>
            </Card.Root>
        </>

    )
}

export default GameCard
