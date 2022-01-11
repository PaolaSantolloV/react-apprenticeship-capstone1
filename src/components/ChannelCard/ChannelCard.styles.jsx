import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 210px;
  width: 100%;
  @media (max-width: 562px) {
    display: inline;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
  }
`;

export const StyledWrapperChannelInfo = styled.div`
  text-align: justify;
  margin-left: 30px;
  width: 60%;
  @media (max-width: 562px) {
    text-align: justify;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 0;
    width: 100%;
  }
`;

export const StyledLabel = styled.p`
  font-weight: 200;
`;

export const StyledLImage = styled.img`
  border-radius: 50px;
  width: 90px;
  height: 90px;
`;
