import React from 'react';

import { StyledInput } from './Input.styles.jsx';

// eslint-disable-next-line react/prop-types
function Input({ placeholder, type, id, onChange, value, title }) {
  return (
    <StyledInput
      className="input"
      placeholder={placeholder}
      id={id}
      type={type}
      onChange={onChange}
      value={value}
      title={title}
    />
  );
}

export default Input;
