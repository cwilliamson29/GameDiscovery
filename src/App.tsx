import './App.css'
import {useState} from "react";
import {Grid, GridItem} from "@chakra-ui/react";
import {Genre} from "@/hooks/useGenres.ts";
import {Platform} from "@/hooks/useGames.ts";
import NavBar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import GenreList from "@/components/GenreList.tsx";
import PlatformSelector from "@/components/PlatformSelector.tsx";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
}

function App() {
    // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    // const [selectedPlatorm, setSelectedPlatorm] = useState<Platform | null>(null);
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    //console.log(selectedGenre);
    //console.log(gameQuery.platform);

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
                <NavBar/>
            </GridItem>
            <GridItem area="aside" bg="" display={{base: "none", lg: "block"}} paddingX={5}>
                <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} selectedGenre={gameQuery.genre}/>
            </GridItem>
            <GridItem area="main" bg="">
                <PlatformSelector onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} selectedPlatform={gameQuery.platform}/>
                <GameGrid gameQuery={gameQuery}/>
            </GridItem>
        </Grid>
    )
}

export default App
