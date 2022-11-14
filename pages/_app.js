import { ThemeProvider } from "styled-components";
import { Theme } from "../src/theme";
import GlobalStyles from "../src/theme/global";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
