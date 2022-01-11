import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 20px;

  @media (max-width: 562px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;
