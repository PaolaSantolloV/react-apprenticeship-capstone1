import styled from 'styled-components';

export const StyledIconButton = styled.button`
  border: 0;
  background-color: transparent;
  outline: none;
  z-index: ${(props) => props.style};
`;
