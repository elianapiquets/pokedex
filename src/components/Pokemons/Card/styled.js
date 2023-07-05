import styled, { css } from "styled-components";
import Link from "next/link";
import { darken } from "polished";

export const Container = styled(Link)`
  border-radius: 10px;
  box-shadow: 5px 5px 7px -3px rgba(0, 0, 0, 0.25);
  background-color: ${(p) => p.$color};
  padding: 6px 10px;
  transition: all ease 0.4s;
  position: relative;
  color: #ffffff;
  text-transform: capitalize;
  transition: all ease 0.3s;
  ${(p) =>
    p.$color === "#F3F3F3" &&
    css`
      color: #333;
    `}

  &:hover {
    background-color: ${(p) => darken(0.1, p.$color)};
  }

  h2 {
    font-size: 16px;
    font-weight: 400;
  }

  &:focus {
    outline-offset: 3px;
    outline-width: 5px;
    outline-style: inset;
  }
`;
