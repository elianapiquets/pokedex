/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "../../../helpers/test";
import "jest-styled-components";

import Card from "./index";

const pokemonMock = {
  __typename: "pokemon_v2_pokemon",
  id: 84,
  name: "doduo",
  pokemon_species_id: 84,
};

describe("Card", () => {
  it("does not break if no props", () => {
    const { container } = render(<Card />);
    expect(container).not.toBe(null);
  });

  it("renders content", () => {
    const { container, getByTestId } = render(
      <Card pokemon={pokemonMock} $color="black" imagePriority={true} />
    );
    expect(container).not.toBe(null);
    expect(getByTestId("pokemon")).toHaveAttribute(
      "href",
      `/pokemon/${pokemonMock.name}`
    );
    expect(getByTestId("pokemon-name")).toHaveTextContent(pokemonMock.name);
    expect(getByTestId("pokemon-image")).toHaveAttribute(
      "src",
      "/_next/image?url=https%3A%2F%2Fassets.pokemon.com%2Fassets%2Fcms2%2Fimg%2Fpokedex%2Ffull%2F084.png&w=384&q=75"
    );
    expect(getByTestId("pokemon")).toHaveStyleRule(
      "background-color",
      "#2E2E2E"
    );
  });
});
