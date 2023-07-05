export const colors: any = {
  black: "#2E2E2E",
  blue: "#385AAF",
  brown: "#B59544",
  gray: "#B5B5B5",
  green: "#3EA184",
  pink: "#E173B5",
  purple: "#7C169C",
  red: "#B94242",
  white: "#F3F3F3",
  yellow: "#FCD139",
};

export const mapColor = (color:  string) => {
  return Object.keys(colors).includes(color) ? colors[color] : color;
};
