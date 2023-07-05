import { Container, Name, Character } from "./styled";
import { mapColor } from "../../helpers/mapColors/";
import Image from "next/image";

export default function Pokemon({
  pokemon,
  pokemonsSpecies,
  imagePriority = "false",
}) {
  const color =
    pokemonsSpecies.filter((s) => s.id === pokemon?.id)[0]
      ?.pokemon_v2_pokemoncolor?.name || "black";

  const mapepdColor = mapColor(color);

  const index = ("00" + pokemon.id).slice(-3);
  const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${index}.png`;

  return (
    <Container>
      <Character $color={mapepdColor}>
        <Name>{pokemon.name} hols</Name>
        <div>#{index}</div>
        <Image
          src={image}
          width="150"
          height="150"
          alt={pokemon.name}
          priority={imagePriority}
          data-testid="pokemon-image"
        />
        <div>
          {pokemon.pokemon_v2_pokemontypes.map((t) => (
            <div key={t.pokemon_v2_type.name}>{t.pokemon_v2_type.name}</div>
          ))}
        </div>
      </Character>

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
              <div key={t.pokemon_v2_ability.name}>
                {t.pokemon_v2_ability.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
