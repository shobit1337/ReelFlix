import React from 'react';
import './PlaylistCard.css';

const PlaylistCard = () => {
  return (
    <div className='playlist-card'>
      <div>
        <div className='title'>Playlist Name</div>
        <span>10 Video</span>
      </div>
      <span>❌</span>
    </div>
  );
};

export default PlaylistCard;
