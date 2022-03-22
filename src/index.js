import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { makeServer } from './server';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
