import React from 'react';

import { StyledInput } from './Input.styles.jsx';

// eslint-disable-next-line react/prop-types
function Input({ placeholder, type, id }) {
  return (
    <StyledInput
      className="input"
      placeholder={placeholder}
      id={id}
      type={type}
    />
  );
}

export default Input;
