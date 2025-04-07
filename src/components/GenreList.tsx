import useGenres, {Genre} from "@/hooks/useGenres.ts";
import {Box, Button, HStack, Image, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url.ts";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

function GenreList({onSelectGenre}: Props) {
    const {data, loading, error} = useGenres()

    if (error) return null
    if (loading) return <Spinner/>
    return (
        <Box as="ul">
            {data.map((genre) =>
                <li key={genre.id}>
                    <HStack paddingY={1}>
                        <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                        <Button fontSize={'lg'} variant="ghost" onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                    </HStack>
                </li>)}
        </Box>
    )
}

export default GenreList
