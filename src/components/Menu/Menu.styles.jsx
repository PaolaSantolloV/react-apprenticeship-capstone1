import styled from 'styled-components';

/* istanbul ignore next */
export const StyledContainer = styled.div`
  background: ${({ theme }) => theme.body};
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border: 1px solid ${({ theme }) => theme.secondary};
  box-shadow: 5px 5px 5px 5px ${({ theme }) => theme.secondary};
  padding-top: 50px;
  position: fixed;
  height: 500px;
  width: 280px;
  z-index: 2;

  @media (max-width: 375px) {
    width: 100%;
  }
`;

export const StyledP = styled.p`
  padding-left: 25px;
  font-weight: 200;
  :hover {
    padding-left: 25px;
    font-weight: 400;
  }
`;
