import React from 'react';
import App from './App';
import {
  BrowserRouter,
  Routes as RouterContainer,
  Route,
} from 'react-router-dom';
import {
  HistoryPage,
  HomePage,
  LikesPage,
  ListingPage,
  PlaylistPage,
} from './pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterContainer>
        <Route>
          <Route path='/' element={<App />}>
            <Route index element={<HomePage />} />
            <Route
              path='history'
              element={<ListingPage title={'Watch History'} />}
            />
            <Route
              path='likes'
              element={<ListingPage title={'Your Liked Videos'} />}
            />
            <Route path='playlist' element={<PlaylistPage />} />
            <Route
              path='browse'
              element={<ListingPage title={'Watch Now'} />}
            />
            <Route
              path='watch-later'
              element={<ListingPage title={'Your watch later list'} />}
            />
          </Route>
        </Route>
        <Route />
      </RouterContainer>
    </BrowserRouter>
  );
};

export default Routes;
