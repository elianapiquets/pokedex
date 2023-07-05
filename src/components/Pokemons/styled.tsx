import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 30px 16px;
  color: #262626;
  ${({ theme: { media, breakpoints } }) => css`
    ${media.up(breakpoints.tablet)} {
      padding: 50px;
    }
  `}

  h1 {
    margin: 0 0 30px 0;
    font-size: 30px;
    font-family: "Major Mono Display", monospace;
    ${({ theme: { media, breakpoints } }) => css`
      ${media.up(breakpoints.tablet)} {
        font-size: 45px;
      }
    `}
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  text-align: center;
  grid-gap: 16px;

  ${({ theme: { media, breakpoints } }) => css`
    ${media.up(breakpoints.tablet)} {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 30px;
    }
  `}

  ${({ theme: { media, breakpoints } }) => css`
    ${media.up(breakpoints.desktopSm)} {
      grid-template-columns: repeat(4, 1fr);
    }
  `}
`;
