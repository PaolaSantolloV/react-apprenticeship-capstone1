import React from 'react';
import Input from '../Input';
import Button from '../Button';

import { StyledTitle, StyledSection } from './LoginForm.styles.jsx';

function LoginForm({ authenticate }) {
  return (
    <StyledSection>
      <StyledTitle>Login</StyledTitle>
      <div>
        <Input
          placeholder="UserName"
          type="text"
          id="username"
          styles="inputForm"
        />
        <Input
          placeholder="Password"
          type="password"
          id="password"
          styles="inputForm"
        />
        <Button label="login" onClick={authenticate} />
      </div>
    </StyledSection>
  );
}

export default LoginForm;
