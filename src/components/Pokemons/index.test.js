/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "../../helpers/test";
import "jest-styled-components";

import { Pokemons } from "./index";
import { pokemomsMock, pokemonSpeciesMock } from "./mock";

jest.mock("next/router", () => ({
  withRouter: jest.fn(),
}));

describe("Pokemons", () => {
  it("does not break if no props", () => {
    const { container } = render(<Pokemons />);
    expect(container).not.toBe(null);
  });

  it("does not break if no props", () => {
    const { container, getAllByTestId } = render(
      <Pokemons pokemons={pokemomsMock} pokemonsSpecies={pokemonSpeciesMock} />
    );
    expect(container).not.toBe(null);
    expect(getAllByTestId("pokemon")).toHaveLength(24);
  });
});
