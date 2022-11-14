import styled, { css } from "styled-components";

export const Container = styled.div`
  .pagination {
    margin: 30px auto 0;
    padding: 0;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;

    ${({ theme: { media, breakpoints } }) => css`
      ${media.up(breakpoints.tablet)} {
        margin: 60px auto 0;
      }
    `}

    .previous,
    .next {
      display: none;

      ${({ theme: { media, breakpoints } }) => css`
        ${media.up(breakpoints.tablet)} {
          display: block;
        }
      `}
    }

    > li {
      padding-left: 0;
      display: flex;
    }

    > li {
      list-style: none;
    }
    > li > a,
    > li > span {
      padding: 6px 12px;
      text-decoration: none;
      color: ${(p) => p.theme.color.link.default};
      color: #333;
      cursor: pointer;

      ${({ theme: { media, breakpoints } }) => css`
        ${media.up(breakpoints.tablet)} {
          padding: 14px 18px;
        }
      `}
    }

    > li.active > a {
      color: #fff;
      background-color: ${(p) => p.theme.color.link.active};
    }

    > li > a:hover {
      color: #fff;
      background-color: ${(p) => p.theme.color.link.hover};
    }
  }
`;
