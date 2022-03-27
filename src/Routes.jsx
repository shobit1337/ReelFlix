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
import { PrivateRoute } from './routing';
import { ForgotPassword, Login, Modal, Signup } from './components';
import Mockman from 'mockman-js';
import PlaylistList from './pages/PlaylistPage/components/PlaylistList/PlaylistList';
import PlaylistView from './pages/PlaylistPage/components/PlaylistView/PlaylistView';
import VideoPage from './pages/VideoPage/VideoPage';

const Routes = () => (
  <>
    <BrowserRouter>
      <RouterContainer>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />

          <Route path='browse' element={<ListingPage />} />
          <Route path='video/:videoId' element={<VideoPage />} />

          <Route element={<PrivateRoute />}>
            <Route path='history' element={<HistoryPage />} />
            <Route path='likes' element={<LikesPage />} />
            <Route path='watch-later' element={<ListingPage />} />

            <Route path='playlist' element={<PlaylistPage />}>
              <Route index element={<PlaylistList />} />
              <Route path=':playlistId' element={<PlaylistView />} />
            </Route>
          </Route>

          <Route element={<PrivateRoute authRoute={true} />}>
            <Route element={<Modal />}>
              <Route path='login' element={<Login />} />
              <Route path='signup' element={<Signup />} />
              <Route path='forgot-password' element={<ForgotPassword />} />
            </Route>
          </Route>
        </Route>
        <Route path='mockman' element={<Mockman />} />
      </RouterContainer>
    </BrowserRouter>
  </>
);

export default Routes;
