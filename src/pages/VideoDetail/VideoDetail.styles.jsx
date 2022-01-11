import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const StyledWrapperVideos = styled.div`
  display: -webkit-inline-box;
  flex-flow: row wrap;
  justify-content: center;
  display: inline-flex;
  margin-top: 30px;
`;

export const StyledWrapperDescription = styled.div`
  display: block;
  width: 100%;
`;

export const StyledWrapperTitle = styled.div`
  display: flex;
`;

export const StyledWrapperIcon = styled.div`
  display: flex;
  margin: 10px;
`;

export const StyledDivider = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.secondary};
`;

export const StyledTitle = styled.h2`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;
  font-size: large;
  padding-left: 5px;
  padding-right: 5px;
  color: ${({ theme }) => theme.text};
  width: 100%;
`;

export const StyledDescription = styled.p`
  font-size: medium;
  font-weight: 200;
  padding-left: 5px;
  padding-right: 5px;
`;

export const StyledVideo = styled.iframe`
  text-align: center;
  width: 100%;
  height: 500px;

  @media (max-width: 825px) {
    height: 337px;
  }

  @media (max-width: 669px) {
    height: 250px;
  }

  @media (max-width: 380px) {
    height: 168px;
  }
`;
