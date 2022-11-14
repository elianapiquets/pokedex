import { Theme } from "../../theme";
import { ThemeProvider } from "styled-components";

export const Providers = ({ children }) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};
