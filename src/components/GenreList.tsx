import useGenres, {Genre} from "@/hooks/useGenres.ts";
import {Box, Button, HStack, Image, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url.ts";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

function GenreList({onSelectGenre, selectedGenre}: Props) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const {data, loading, error} = useGenres()

    if (error) return null
    if (loading) return <Spinner/>
    return (
        <Box as="ul">
            {data.map((genre: Genre) =>
                <li key={genre.id}>
                    <HStack paddingY={1}>
                        <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                        <Button fontSize={'lg'} fontWeight={selectedGenre === genre ? "bold" : "normal"} variant="ghost" onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                    </HStack>
                </li>)}
        </Box>
    )
}

export default GenreList
