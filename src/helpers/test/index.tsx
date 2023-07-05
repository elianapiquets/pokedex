import { render } from "@testing-library/react";
import { Providers } from "./providers";
import { ReactElement } from 'react'

const customRender = (ui: ReactElement, options?: object) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender as render };
