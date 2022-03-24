import React from 'react';
import { Outlet } from 'react-router-dom';

const PlaylistPage = () => {
  return (
    <div>
      <h3 className='section-title'>My Playlists</h3>
      <Outlet />
    </div>
  );
};

export default PlaylistPage;
