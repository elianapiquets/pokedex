import { Container, Grid } from "./styled";
import Pagination from "../Pagination";
import Card from "./Card";
import { withRouter, NextRouter } from 'next/router'
import  { PokemonsSpecies, Pokemon } from '../Pokemon'

type Props = {
  pokemons: Pokemon[]
  pageCount: number
  currentPage: number
  pokemonsSpecies: PokemonsSpecies[]
  router: NextRouter
}

export function Pokemons({
  pokemons,
  pageCount,
  currentPage,
  pokemonsSpecies,
  router,
}: Props) {
  if (!pokemons && !pokemonsSpecies) return null;
  const onChangeHandler = (page: any) => {
    const path = router.pathname;
    const query = { ...router.query };
    query.page = page.selected + 1;

    router.push({
      pathname: path,
      query: query,
    });
  };

  return (
    <Container>
      <main>
        <h1>Pokedex</h1>
        <Grid>
          {pokemons.map((pokemon) => {
            const color =
              pokemonsSpecies.filter(
                (s) => s.id === pokemon?.pokemon_species_id
              )[0]?.pokemon_v2_pokemoncolor?.name || "black";

            return <Card key={pokemon.name} pokemon={pokemon} $color={color} />;
          })}
        </Grid>
        <Pagination
          pageCount={pageCount}
          currentPage={currentPage}
          onChangeHandler={onChangeHandler}
        />
      </main>
    </Container>
  );
}

export default withRouter(Pokemons);
