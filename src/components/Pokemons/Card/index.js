import { Container } from "./styled";
import Image from "next/image";
import { mapColor } from "../../../helpers/mapColors/";

export function Card({ pokemon, $color, imagePriority, ...props }) {
  if (!pokemon) return null;
  const index = ("00" + pokemon.id).slice(-3);
  const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${index}.png`;

  const mapepdColor = mapColor($color || "black");

  return (
    <Container
      key={pokemon.name}
      href={`/pokemon/${pokemon.name}`}
      $color={mapepdColor}
      data-testid="pokemon"
      role="button"
    >
      <Image
        src={image}
        width="150"
        height="150"
        alt={pokemon.name}
        priority={imagePriority}
        data-testid="pokemon-image"
      />
      <h2 data-testid="pokemon-name">{pokemon.name}</h2>
    </Container>
  );
}

export default Card;
