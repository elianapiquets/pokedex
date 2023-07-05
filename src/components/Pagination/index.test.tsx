/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "../../helpers/test";

import Pagination from "./index";
import {props} from './mock'

describe("Pagination", () => {
  it("does not break if no props", () => {
    const { container } = render(<Pagination  {...props}/>);
    expect(container).not.toBe(null);
  });

  it("does not break if no props", () => {
    const { container } = render(<Pagination {...props}/>);
    expect(container).not.toBe(null);
  });
});
