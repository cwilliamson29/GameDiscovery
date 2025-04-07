import './App.css'
import {Grid, GridItem} from "@chakra-ui/react";
import NavBar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import GenreList from "@/components/GenreList.tsx";

function App() {

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
                <GenreList/>
            </GridItem>
            <GridItem area="main" bg="">
                <GameGrid/>
            </GridItem>
        </Grid>
    )
}

export default App
