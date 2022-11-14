import { render } from "@testing-library/react";
import { Providers } from "./providers";

const customRender = (ui, options) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender as render };
