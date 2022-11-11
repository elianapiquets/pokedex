import { gql } from '@apollo/client'
import client from '../../apollo-client'

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
      }
  `,
  })

  return {
    props: {
      pokemon: data.pokemon_v2_pokemon[0],
    },
  }
}

export default function Pokemon({ pokemon }) {
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <div>
        <div>height: {pokemon.height}</div>
        <div>weight: {pokemon.weight}</div>
        <div>
          <h2>Types:</h2>
          <div>
            {pokemon.pokemon_v2_pokemontypes.map((t) => (
              <div key={t.pokemon_v2_type.name}>{t.pokemon_v2_type.name}</div>
            ))}
          </div>
        </div>
        <div>
          <h2>Abilities:</h2>
          <div>
            {pokemon.pokemon_v2_pokemonabilities.map((t) => (
              <div key={t.pokemon_v2_ability.name}>{t.pokemon_v2_ability.name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
