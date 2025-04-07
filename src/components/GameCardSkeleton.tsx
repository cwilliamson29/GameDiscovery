import {Card, Skeleton, SkeletonText} from "@chakra-ui/react";
import GameCardContainer from "@/components/GameCardContainer.tsx";

function GameCardSkeleton() {
    return (
        <GameCardContainer>
            <Card.Root>
                <Skeleton height="200px"/>
                <Card.Body>
                    <SkeletonText/>
                </Card.Body>
            </Card.Root>
        </GameCardContainer>

    )
}

export default GameCardSkeleton
