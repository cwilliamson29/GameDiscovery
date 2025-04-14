import './App.css'
import {useState} from "react";
import {Grid, GridItem, HStack} from "@chakra-ui/react";
import {Genre} from "@/hooks/useGenres.ts";
import {Platform} from "@/hooks/useGames.ts";
import NavBar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import GenreList from "@/components/GenreList.tsx";
import PlatformSelector from "@/components/PlatformSelector.tsx";
import SortSelector, {SortOrder} from "@/components/SortSelector.tsx";
import GameHeading from "@/components/GameHeading.tsx";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sort: SortOrder | null;
    searchText: string;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return (
        <Grid templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`
        }}
              templateColumns={{
                  base: '1fr',
                  lg: '200px 1fr'
              }}
        >
            <GridItem area="nav">
                <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
            </GridItem>
            <GridItem area="aside" bg="" display={{base: "none", lg: "block"}} paddingX={5}>
                <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} selectedGenre={gameQuery.genre}/>
            </GridItem>
            <GridItem area="main" bg="">
                <GameHeading gameQuery={gameQuery}/>
                <HStack paddingLeft={6}>
                    <PlatformSelector onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} selectedPlatform={gameQuery.platform}/>
                    <SortSelector setSort={(sort) => setGameQuery({...gameQuery, sort})} sort={gameQuery.sort}/>
                </HStack>

                <GameGrid gameQuery={gameQuery}/>
            </GridItem>
        </Grid>
    )
}

export default App
