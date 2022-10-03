import styled from "styled-components";

import {
    color,
    ColorProps,
    space,
    SpaceProps,
    layout,
    LayoutProps,
    border,
    BorderProps,
    flexbox,
    FlexboxProps,
    typography,
    TypographyProps,
  } from "styled-system";
  
  type BoxingProps = ColorProps &
    SpaceProps &
    LayoutProps &
    BorderProps &
    FlexboxProps &
    TypographyProps;
  
  export const Box = styled.div<BoxingProps>(
    color,
    space,
    layout,
    border,
    flexbox,
    typography
  );

// import {
//   background,
//   BackgroundProps,
//   border,
//   BorderProps,
//   space,
//   SpaceProps,
//   color,
//   ColorProps,
//   layout,
//   LayoutProps,
//   flexbox,
//   FlexboxProps,
//   shadow,
//   ShadowProps,
//   typography,
//   TypographyProps,
// } from "styled-system";

// interface VariantProps {
//   variant: "submit" | "cancel";
// }

// type ButtonProps = BackgroundProps &
//   BorderProps &
//   ColorProps &
//   LayoutProps &
//   ShadowProps &
//   TypographyProps &
//   VariantProps;

// export const Button = styled.button<ButtonProps>`
//   ${color}
//   ${space}
//   ${layout}
//   ${border}
//   ${shadow}
//   ${flexbox}
//   ${typography}
//   ${background}
// `;


