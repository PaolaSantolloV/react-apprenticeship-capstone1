import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.body};
  display: flex;
  height: 55px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  @media (max-width: 562px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const StyledWrapperIcon = styled.div`
  display: flex;
  margin: 10px;
`;

export const StyledWrapperIconClose = styled.div`
  display: flex;
  margin: 10px;
  z-index: 3;
`;
