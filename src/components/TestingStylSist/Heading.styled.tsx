import React from "react";
import styled from "styled-components";
import {
  color,
  ColorProps,
  space,
  layout,
  LayoutProps,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";

type HeadingProps = ColorProps &
  SpaceProps &
  LayoutProps &
  TypographyProps & { children?: React.ReactNode };

const Heading = styled.div<HeadingProps>`
  ${typography}
  ${color}
  ${space}
  ${layout}
`;

const YellowHeading: React.FC<HeadingProps & { as?: any }> = (props) => {
  return (
    <Heading color="gold" bg="slategray" {...props}>
      {props.children}
    </Heading>
  );
};

const TestingStyledSystem: React.FC = () => {
  return (
    <>
      <Heading p="15px" bg="yellow" color="white" fontSize="60px">
        Heading
      </Heading>

      <Heading p="15px" bg="black" color="white" as="h2">
        Heading
      </Heading>

      <YellowHeading height={7}>
        <p>DJON</p>
      </YellowHeading>
    </>
  );
};

export default TestingStyledSystem;
