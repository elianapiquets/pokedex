import { Theme } from "../../theme";
import { ThemeProvider } from "styled-components";
import { ReactNode } from 'react'
 
type Props = {
  children: ReactNode
}

export const Providers = ({ children }:Props ) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};
