import useData from "@/hooks/useData.ts";
import {Genre} from "@/hooks/useGenres.ts";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number
    name: string
    released: string
    background_image: string
    parent_platforms: { platform: Platform }[]
    metacritic: number;
}

const useGenres = (selectedGenre: Genre | null) => useData<Game>("/games", {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useGenres