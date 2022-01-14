import React from 'react';

import Header from '../Header/Header.component';
import { ThemeProvider } from 'styled-components';
import { useGlobalContext } from '../../providers';
import { lightTheme, darkTheme, GlobalStyles } from '../../theme';
import { StyledContainer } from './Layout.styles.jsx';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  const { state } = useGlobalContext();

  return (
    <>
      <ThemeProvider theme={state.isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header />
        <StyledContainer>{children}</StyledContainer>
      </ThemeProvider>
    </>
  );
}

export default Layout;
