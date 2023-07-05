import { gql } from "@apollo/client";
import client from "../apollo-client";
import Pokemons from "../src/components/Pokemons";

export async function getServerSideProps({ query }) {
  const itemsPerPage = 24;
  const page = query.page || 1;

  const { data } = await client.query({
    query: gql`
      query getPokemons {
        pokemon_v2_pokemon(limit: ${itemsPerPage}, offset: ${
      itemsPerPage * (page - 1)
    }) {
          id
          name
          pokemon_species_id
        }
        pokemon_v2_pokemon_aggregate {
          aggregate {
            count
          }
        }
        pokemon_v2_pokemonspecies(limit: ${itemsPerPage}, offset: ${
      itemsPerPage * (page - 1)
    }, order_by: {id: asc}) {
          id
          pokemon_v2_pokemoncolor {
            name
          }
        }
      }
    `,
  });

  const totalCount = data?.pokemon_v2_pokemon_aggregate?.aggregate?.count || 0;
  return {
    props: {
      pokemons: data.pokemon_v2_pokemon,
      pokemonsSpecies: data.pokemon_v2_pokemonspecies,
      pageCount: Math.ceil(totalCount / itemsPerPage),
      currentPage: page,
    },
  };
}

export default function App({
  pokemons,
  pageCount,
  currentPage,
  pokemonsSpecies,
}) {
  return (
    <>
      <Pokemons
        pokemons={pokemons}
        pageCount={pageCount}
        currentPage={currentPage}
        pokemonsSpecies={pokemonsSpecies}
      />
    </>
  );
}

// unit test
// error handle
