import styled from 'styled-components';

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.secondary};
  border: 0;
  border-radius: 8px;
  color: ${({ theme }) => theme.text};
  height: 40px;
  margin-bottom: 10px;
  outline: none;
  padding-left: 10px;
  width: 100%;
`;
