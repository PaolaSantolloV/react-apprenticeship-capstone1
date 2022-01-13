import styled from 'styled-components';

export const StyledButton = styled.button`
  color: white;
  border: 0;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  height: 40px;
  background-color: ${({ theme }) => theme.primary};
  width: 100%;
  outline: none;
  text-transform: uppercase;
`;
