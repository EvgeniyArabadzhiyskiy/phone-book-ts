import styled from 'styled-components';

export const FormLabel = styled.label`
  position: relative;
  display: block;
  font-weight: ${prop => prop.theme.fontWeights.semiBold};
  margin-bottom: ${prop => prop.theme.space[3] * 3}px;
`;

export const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
`;

export const StyledError = styled('span')`
  position: absolute;
  top: 105%;
  left: 5px;
  width: 600px;
  text-align: left;
  color: ${p => p.theme.colors.red};
`;