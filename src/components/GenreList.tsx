import useGenres from "@/hooks/useGenres.ts";
import {Box, HStack, Image} from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url.ts";

function GenreList() {
    const {data} = useGenres()
    return (
        <Box as="ul">
            {data.map((genre) =>
                <li key={genre.id}>
                    <HStack padding={1}>
                        <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                        {genre.name}
                    </HStack>

                </li>)}
        </Box>
    )
}

export default GenreList
