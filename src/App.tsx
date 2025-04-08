import './App.css'
import {Grid, GridItem} from "@chakra-ui/react";
import NavBar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import GenreList from "@/components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "@/hooks/useGenres.ts";


function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
                <GameGrid selectedGenre={selectedGenre}/>
            </GridItem>
        </Grid>
    )
}

export default App
