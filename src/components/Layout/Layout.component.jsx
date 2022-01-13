import React from 'react';

import { StyledContainer } from './Layout.styles.jsx';
import Header from '../Header/Header.component';

// eslint-disable-next-line react/prop-types
function Layout({ children, theme, toggleTheme }) {
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <StyledContainer>{children}</StyledContainer>
    </>
  );
}

export default Layout;
