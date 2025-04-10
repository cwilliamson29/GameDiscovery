import useData from "@/hooks/useData.ts";
import {GameQuery} from "@/App.tsx";

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

const useGenres = (gameQuery: GameQuery) =>
    useData<Game>("/games", {
        params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sort?.value,
            search: gameQuery?.searchText
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
    }, [gameQuery]);

export default useGenres