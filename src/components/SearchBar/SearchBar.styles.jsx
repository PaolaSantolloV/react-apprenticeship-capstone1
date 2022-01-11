import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  width: 100%;
`;

export const StyledWrapper = styled.div`
  margin-right: 5px;
  width: 400px;
  @media (max-width: 800px) {
    margin-right: 5px;
    width: 200px;
  }
  @media (max-width: 800px) {
    margin-right: 5px;
    width: 200px;
  }
  @media (max-width: 531px) {
    margin-right: 5px;
    width: 130px;
  }

  @media (max-width: 444px) {
    margin-right: 5px;
    width: 80px;
  }
`;

export const StyledWrapperButton = styled.div`
  width: 90px;
  @media (max-width: 444px) {
    width: 65px;
  }
`;
