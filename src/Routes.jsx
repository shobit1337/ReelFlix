import React from 'react';
import App from './App';
import {
  BrowserRouter,
  Routes as RouterContainer,
  Route,
} from 'react-router-dom';
import { HomePage, ListingPage, PlaylistPage } from './pages';
import { PrivateRoute } from './routing';
import { ForgotPassword, Login, Modal, Signup } from './components';

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterContainer>
        <Route>
          <Route path='/' element={<App />}>
            <Route index element={<HomePage />} />
            <Route element={<PrivateRoute />}>
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
            <Route element={<PrivateRoute authRoute={true} />}>
              <Route element={<Modal />}>
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
                <Route path='forgot-password' element={<ForgotPassword />} />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route />
      </RouterContainer>
    </BrowserRouter>
  );
};

export default Routes;
