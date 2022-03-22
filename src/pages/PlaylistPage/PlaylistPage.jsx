import React from 'react';
import PlaylistCard from '../../components/PlaylistCard/PlaylistCard';

const PlaylistPage = () => {
  return (
    <div>
      <h3 className='section-title'>My Playlists</h3>
      <header className='section-header'>
        <span>Sort by: Date Added</span>
        <span>Filter: Date Added</span>
      </header>
      <div className='playlist-container'>
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
      </div>
    </div>
  );
};

export default PlaylistPage;
