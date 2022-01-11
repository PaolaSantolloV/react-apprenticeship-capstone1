import React from 'react';
import { StyledButton } from './Button.styles.jsx';

// eslint-disable-next-line react/prop-types
function Button({ label, onClick }) {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
}

export default Button;
