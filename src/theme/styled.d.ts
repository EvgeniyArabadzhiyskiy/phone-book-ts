import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
      red: string;
      blue: string;
      white: string;
      black: string;
      green: string;
      yellow: string;
      primary: string;
      whtBtn: string;
      hover: string;
      primaryBtn: string;
      container: string;
    };

    space: number[];
    sizes: number[];

    fonts: {
      body: string;
      heading: string;
      monospace: string;
    };

    fontSizes: {
      xs: string;
      s: string;
      m: string;
      ml: string;
      l: string;
      xl: string;
    };

    lineHeights: {
      body: number;
      heading: number;
    };

    fontWeights: {
      normal: number;
      semiBold: number;
      bold: number;
    };

    borders: {
      none: string;
      normal: string;
    };
    radii: {
      none: string;
      normal: string;
      round: string;
    };
  }
}
