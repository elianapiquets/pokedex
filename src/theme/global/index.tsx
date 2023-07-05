import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'IBM Plex Mono', monospace;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  h1 {
    font-family: 'Major Mono Display', monospace;
  } 
`;
