/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "../../helpers/test";

import Pagination from "./index";

describe("Pagination", () => {
  it("does not break if no props", () => {
    const { container } = render(<Pagination />);
    expect(container).not.toBe(null);
  });

  it("does not break if no props", () => {
    const { container } = render(<Pagination pageCount={49} currentPage={4} />);
    expect(container).not.toBe(null);
  });
});
