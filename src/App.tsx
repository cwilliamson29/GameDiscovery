import './App.css'
import {useState} from "react";
import {Grid, GridItem} from "@chakra-ui/react";
import {Genre} from "@/hooks/useGenres.ts";
import {Platform} from "@/hooks/useGames.ts";
import NavBar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import GenreList from "@/components/GenreList.tsx";
import PlatformSelector from "@/components/PlatformSelector.tsx";


function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [selectedPlatorm, setSelectedPlatorm] = useState<Platform | null>(null);

    //console.log(selectedGenre);

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
                <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre}/>
            </GridItem>
            <GridItem area="main" bg="">
                <PlatformSelector onSelectPlatform={(platform) => setSelectedPlatorm(platform)} selectedPlatform={selectedPlatorm}/>
                <GameGrid selectedGenre={selectedGenre}/>
            </GridItem>
        </Grid>
    )
}

export default App
