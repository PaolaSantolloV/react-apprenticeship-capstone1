import React, { useState } from 'react';

import Input from '../Input';
import Button from '../Button';
import { StyledTitle, StyledSection } from './LoginForm.styles.jsx';

function LoginForm({ authenticate }) {
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleChange = ({ fieldName, event }) => {
    setLoginData({
      ...loginData,
      [fieldName]: event.currentTarget.value,
    });
  };

  return (
    <StyledSection>
      <StyledTitle>Login</StyledTitle>
      <div>
        <Input
          placeholder="UserName"
          type="text"
          id="username"
          styles="inputForm"
          onChange={(event) => handleChange({ fieldName: 'username', event })}
          value={loginData.username}
        />
        <Input
          placeholder="Password"
          type="password"
          id="password"
          styles="inputForm"
          onChange={(event) => handleChange({ fieldName: 'password', event })}
          value={loginData.password}
        />
        <Button
          label="login"
          onClick={(event) => authenticate(event, loginData)}
        />
      </div>
    </StyledSection>
  );
}

export default LoginForm;
