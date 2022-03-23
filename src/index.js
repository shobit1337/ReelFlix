import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './context/auth-context';
import { PlaylistsProvider } from './context/playlist-context';
import Routes from './Routes';
import { makeServer } from './server';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <PlaylistsProvider>
        <Routes />
      </PlaylistsProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
