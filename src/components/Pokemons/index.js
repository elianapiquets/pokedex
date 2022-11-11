import { Container, Grid, Card } from './styled'
import Image from 'next/image'
import ReactPaginate from 'react-paginate'
import Router, { withRouter } from 'next/router'
import Pagination from '../Pagination'

export function Pokemons({ pokemons, pageCount, currentPage, pokemonsSpecies, ...props }) {
  const onChangeHandler = (page) => {
    const path = props.router.pathname
    const query = { ...props.router.query }
    query.page = page.selected + 1

    props.router.push({
      pathname: path,
      query: query,
    })
  }

  return (
    <Container>
      <main>
        <h1>Pokedex</h1>
        <Grid>
          {pokemons.map((pokemon) => {
            const color =
              pokemonsSpecies.filter((s) => s.id === pokemon.pokemon_species_id)[0]
                .pokemon_v2_pokemoncolor.name || gray
            return (
              <Card key={pokemon.name} href={`/pokemon/${pokemon.name}`} $color={color}>
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
                  width='150'
                  height='150'
                  alt={pokemon.name}
                />
                <h2>{pokemon.name}</h2>
              </Card>
            )
          })}
        </Grid>
        <Pagination
          pageCount={pageCount}
          currentPage={currentPage}
          onChangeHandler={onChangeHandler}
        />
      </main>
    </Container>
  )
}

export default withRouter(Pokemons)
