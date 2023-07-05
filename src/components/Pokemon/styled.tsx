import styled, { css } from "styled-components";

export const Container = styled.div``;

export const Character = styled.div<{ $color: string}>`
  padding: 30px 16px;
  background-color: ${(p) => p.$color};

  ${({ theme: { media, breakpoints } }) => css`
    ${media.up(breakpoints.tablet)} {
      padding: 30px 50px;
    }
  `}
`;

export const Name = styled.h1<{ $color: string}>`
  margin: 0 0 30px 0;
  color: #ffffff;
  text-transform: capitalize;
  ${(p) =>
    p.$color === "#F3F3F3" &&
    css`
      color: #333;
    `}
  font-size: 24px;

  ${({ theme: { media, breakpoints } }) => css`
    ${media.up(breakpoints.tablet)} {
      font-size: 32px;
    }
  `}
`;
