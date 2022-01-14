import React from 'react';

import { StyledIconButton } from './IconButton.styles.jsx';

// eslint-disable-next-line react/prop-types
function IconButton({ children, onClick, styles, title }) {
  var zIndex = 1;

  if (styles === 'iconButtonClose') {
    zIndex = 3;
  }

  return (
    // eslint-disable-next-line
    <StyledIconButton title={title} style={zIndex} onClick={onClick}>
      {children}
    </StyledIconButton>
  );
}

export default IconButton;
