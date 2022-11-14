import { Container, Grid } from "./styled";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import Router, { withRouter } from "next/router";
import Pagination from "../Pagination";
import Card from "./Card";

export function Pokemons({
  pokemons,
  pageCount,
  currentPage,
  pokemonsSpecies,
  ...props
}) {
  const onChangeHandler = (page) => {
    const path = props.router.pathname;
    const query = { ...props.router.query };
    query.page = page.selected + 1;

    props.router.push({
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
                (s) => s.id === pokemon.pokemon_species_id
              )[0].pokemon_v2_pokemoncolor.name || gray;

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
