import React, { useState } from 'react';

import Input from '../Input';
import Button from '../Button';
import {
  StyledTitle,
  StyledSection,
  StyledError,
} from './LoginForm.styles.jsx';

function LoginForm({ authenticate, error }) {
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
      <Input
        title="username"
        placeholder="UserName"
        type="text"
        id="username"
        styles="inputForm"
        onChange={(event) => handleChange({ fieldName: 'username', event })}
        value={loginData.username}
      />
      <Input
        title="password"
        placeholder="Password"
        type="password"
        id="password"
        styles="inputForm"
        onChange={(event) => handleChange({ fieldName: 'password', event })}
        value={loginData.password}
      />
      {error === true && (
        <StyledError>Username or password invalid</StyledError>
      )}
      <Button
        label="login"
        onClick={(event) => authenticate(event, loginData)}
      />
    </StyledSection>
  );
}

export default LoginForm;
