import React from 'react';
import { Link } from 'react-router-dom';

import {
  StyledContainer,
  StyledImage,
  StyledWrapper,
  StyledTitle,
  StyledDescription,
} from './VideoCard.styles.jsx';
// eslint-disable-next-line react/prop-types
function VideoCard({ image, id, title, description, mockVideo }) {
  return (
    <Link
      to={{
        pathname: '/' + id,
        video: { title: title, description: description, mockVideo: mockVideo },
      }}
    >
      <StyledContainer>
        <StyledImage src={image.url} alt={title} />
        <StyledWrapper>
          <StyledTitle> {title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </StyledWrapper>
      </StyledContainer>
    </Link>
  );
}

export default VideoCard;
