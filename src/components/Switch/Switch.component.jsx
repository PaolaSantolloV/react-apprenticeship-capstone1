import React from 'react';

import {
  StyledInput,
  StyledLabel,
  StyledSpan,
  StyledSwitch,
} from './Switch.styles.jsx';
// eslint-disable-next-line react/prop-types
function Switch({ isOn, handleToggle, label }) {
  return (
    <div>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledSwitch>
        <StyledInput checked={isOn} onChange={handleToggle} />
        <StyledSpan />
      </StyledSwitch>
    </div>
  );
}

export default Switch;
