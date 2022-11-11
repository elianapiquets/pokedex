export const breakpoints = {
  mobileSm: 375,
  mobileLg: 480,
  tablet: 768,
  desktopSm: 1024,
  desktopLg: 1440,
  desktopXl: 1920,
}

export const media = {
  up: (breakpoint) => `@media (min-width: ${breakpoint}px)`,
  down: (breakpoint) => `@media (max-width: ${breakpoint - 1}px)`,
  between: (breakpointMin, breakpointMax) =>
    `@media (max-width: ${breakpointMax}px) and (min-width: ${breakpointMin}px)`,
}
