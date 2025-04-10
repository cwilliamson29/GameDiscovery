import {GameQuery} from "@/App.tsx";
import {Heading} from "@chakra-ui/react";

interface Props {
    gameQuery: GameQuery;
}

function GameHeading({gameQuery}: Props) {
    const heading = `${gameQuery?.platform?.name || ''} ${gameQuery?.genre?.name || ''} Games`
    return (
        <Heading size="4xl" paddingLeft={6} paddingBottom={3}>{heading}</Heading>

    )
}

export default GameHeading
