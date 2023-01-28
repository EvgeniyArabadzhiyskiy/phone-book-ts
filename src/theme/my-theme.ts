import { DefaultTheme } from "styled-components";

const myTheme: DefaultTheme = {
  borderRadius: "5px",

  colors: {
    main: "cyan",
    secondary: "magenta",
    red: "#ff0000",
    blue: "#0000ff",
    white: "#ffffff",
    black: "#000000",
    green: "#00ff00",
    yellow: "#ffff00",
    primary: "#777777",
    whtBtn: "#e2e2e2",
    hover: "#1a1dc7",
    primaryBtn: "#07c",
    container: "#bbb5b5",
  },

  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  sizes: [10, 20, 30, 40, 50, 60, 100, 200],

  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },

  fontSizes: {
    xs: "12px",
    s: "14px",
    m: "16px",
    ml: "22px",
    l: "32px",
    xl: "64px",
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  fontWeights: {
    normal: 400,
    semiBold: 500,
    bold: 700,
  },

  borders: {
    none: "none",
    normal: "1px solid black",
  },

  radii: {
    none: "0",
    normal: "4px",
    round: "50%",
  },
};

export { myTheme };
