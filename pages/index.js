import Head from 'next/head'
import { gql } from '@apollo/client'
import client from '../apollo-client'
import Pokemons from '../src/components/Pokemons'

export async function getServerSideProps({ query }) {
  const itemsPerPage = 24
  const page = query.page || 1

  const { data } = await client.query({
    query: gql`
      query getPokemons {
        pokemon_v2_pokemon(limit: ${itemsPerPage}, offset: ${itemsPerPage * (page - 1)}) {
          id
          name
          pokemon_species_id
        }
        pokemon_v2_pokemon_aggregate {
          aggregate {
            count
          }
        }
        pokemon_v2_pokemonspecies {
          id
          pokemon_v2_pokemoncolor {
            name
          }
        }
      }
    `,
  })

  const totalCount = data?.pokemon_v2_pokemon_aggregate?.aggregate?.count || 0
  return {
    props: {
      pokemons: data.pokemon_v2_pokemon,
      pokemonsSpecies: data.pokemon_v2_pokemonspecies,
      pageCount: Math.ceil(totalCount / itemsPerPage),
      currentPage: page,
    },
  }
}

export default function App({ pokemons, pageCount, currentPage, pokemonsSpecies }) {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name='title' content='title' />
        <meta name='description' content='Pokedex description' />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='title' />
        <meta property='og:description' content='descrition' />
        <meta property='og:image' content='add image url' />
        <meta property='og:image:alt' content='alt' />
      </Head>
      <Pokemons
        pokemons={pokemons}
        pageCount={pageCount}
        currentPage={currentPage}
        pokemonsSpecies={pokemonsSpecies}
      />
    </>
  )
}

// fetch in batches
// buttons to load more
// put loading state
// unit test
// error handle
// find total on endpoint
