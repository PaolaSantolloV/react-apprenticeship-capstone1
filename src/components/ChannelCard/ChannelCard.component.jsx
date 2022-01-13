import React from 'react';

import {
  StyledContainer,
  StyledWrapperChannelInfo,
  StyledLabel,
  StyledLImage,
} from './ChannelCard.styles.jsx';

// eslint-disable-next-line react/prop-types
function ChannelCard({ description, title, logo }) {
  return (
    <StyledContainer>
      <StyledLImage alt={title} src={logo.url} />
      <StyledWrapperChannelInfo>
        <h2 className="titleForm">{title}</h2>
        <StyledLabel>{description}</StyledLabel>
      </StyledWrapperChannelInfo>
    </StyledContainer>
  );
}

export default ChannelCard;
