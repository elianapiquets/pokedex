import styled, { css } from 'styled-components'
import Link from 'next/link'
import { desaturate } from 'polished'

export const Container = styled.div`
  padding: 16px;
  background-color: #252525;
  color: #fff;
  ${({ theme: { media, breakpoints } }) => css`
    ${media.up(breakpoints.tablet)} {
      padding: 50px;
    }
  `}

  h1 {
    margin: 0 0 30px 0;
  }
`

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
`

export const Card = styled(Link)`
  border-radius: 10px;
  box-shadow: 6px 7px 12px -5px rgba(0, 0, 0, 0.7);
  background-color: ${(p) => desaturate(0.2, p.$color)};
  ${(p) =>
    p.$color === 'white' &&
    css`
      background-color: #dfdcdc;
    `}
  padding: 6px 10px;
  transition: all ease 0.4s;
  position: relative;
  color: #ffffff;
  text-transform: capitalize;

  &:hover {
    background-color: ${(p) => desaturate(0.4, p.$color)};

    ${(p) =>
      p.$color === 'white' &&
      css`
        background-color: #c4bfbf;
      `}
  }

  h2 {
    font-size: 16px;
    font-weight: 400;
  }
`
