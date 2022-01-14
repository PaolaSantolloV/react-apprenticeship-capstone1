import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalProvider from '../../providers/Global.provider';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import VideoDetailPage from '../../pages/VideoDetail';
import FavoritesPage from '../../pages/Favorites/Favorites.page';
import Private from '../Private/Private.component';
import Layout from '../Layout';

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Private exact path="/favorites">
              <FavoritesPage />
            </Private>
            <Route exact path="/404">
              <NotFound />
            </Route>
            <Route path="/:id">
              <VideoDetailPage />
            </Route>
          </Switch>
        </Layout>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
