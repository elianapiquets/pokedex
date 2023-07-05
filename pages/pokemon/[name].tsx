import { gql } from "@apollo/client";
import client from "../../apollo-client";
import Pokemon from "../../src/components/Pokemon";

export async function getServerSideProps({ params }) {
  const { data } = await client.query({
    query: gql`
      query getPokemon {
        pokemon_v2_pokemon(where: {name: {_eq: ${params.name}}}) {
          id
          name
          height
          base_experience
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
          weight
          pokemon_v2_pokemonabilities {
            id
            pokemon_v2_ability {
              name
            }
          }
        }
        pokemon_v2_pokemonspecies(where: {name: {_eq: ${params.name}}}) {
          id
          pokemon_v2_pokemoncolor {
            name
          }
        }
      }
  `,
  });

  return {
    props: {
      pokemon: data.pokemon_v2_pokemon[0],
      pokemonsSpecies: data.pokemon_v2_pokemonspecies,
    },
  };
}

export default function PokemonPage({ pokemon, pokemonsSpecies }) {
  return (
    <Pokemon pokemon={pokemon} pokemonsSpecies={pokemonsSpecies}></Pokemon>
  );
}
