import useData from "@/hooks/useData.ts";

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

const useGenres = () => useData<Game>("/games");

export default useGenres