import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useGlobalContext } from '../../providers';

// eslint-disable-next-line react/prop-types
function Private({ children, ...rest }) {
  const { state } = useGlobalContext();

  return (
    <Route
      {...rest}
      render={() =>
        state.authenticated ? (
          children
        ) : (
          <Redirect title="routeRedirect" to="/" />
        )
      }
    />
  );
}

export default Private;
