import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import VideoDetailPage from '../../pages/VideoDetail';
import FavoritesPage from '../../pages/Favorites/Favorites.page';
import Private from '../Private/Private.component';
import Layout from '../Layout';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../../theme';

function App() {
  const [theme, setTheme] = useState('light');
  const [isDark, setIsDark] = useState(false);
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
    setIsDark(!isDark);
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Layout theme={isDark} toggleTheme={toggleTheme}>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Private exact path="/favorites">
                <FavoritesPage />
              </Private>
              <Route path="/:id">
                <VideoDetailPage />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
