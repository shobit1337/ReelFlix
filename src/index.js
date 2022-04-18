import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './context/auth-context';
import { FiltersProvider } from './context/filter-context';
import { PlaylistsProvider } from './context/playlist-context';
import Routes from './Routes';
import { makeServer } from './server';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <FiltersProvider>
        <PlaylistsProvider>
          <Routes />
        </PlaylistsProvider>
      </FiltersProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
