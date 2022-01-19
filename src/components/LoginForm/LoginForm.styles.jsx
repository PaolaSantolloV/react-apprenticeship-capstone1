import styled from 'styled-components';

export const StyledSection = styled.section`
  width: 500px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.body};
  padding-bottom: 20px;
  padding-right: 20px;
  padding-left: 20px;
  @media (max-width: 545px) {
    width: 300px;
  }
`;

export const StyledTitle = styled.h1`
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

/* istanbul ignore next */
export const StyledError = styled.h2`
  font-size: smaller;
  font-weight: 200;
  color: ${({ theme }) => theme.text};
`;
