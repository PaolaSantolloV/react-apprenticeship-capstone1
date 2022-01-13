import styled from 'styled-components';

/* istanbul ignore next */
export const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  border-radius: 8px;
  width: 320px;
  height: 320px;
  margin: 20px;
  :hover {
    box-shadow: 5px 5px 5px 5px ${({ theme }) => theme.secondary};
  }
`;

export const StyledWrapper = styled.div`
  text-align: justify;
  padding-bottom: 15px;
  padding-right: 10px;
  padding-left: 10px;
`;

export const StyledImage = styled.img`
  border-radius: 8px;
`;

/* istanbul ignore next */
export const StyledTitle = styled.h2`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;
  font-size: medium;
  color: ${({ theme }) => theme.text}

  display: block;
  display: -webkit-box;
  line-height: 1.3em;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledDescription = styled.p`
  font-size: small;
  font-weight: 200;

  display: block;
  display: -webkit-box;
  line-height: 1.3em;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
