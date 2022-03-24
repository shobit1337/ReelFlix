import React, { useState } from 'react';
import { usePlaylists } from '../../../../context/playlist-context';
import PlaylistCard from '../../../../components/PlaylistCard/PlaylistCard';
import CreatePlaylistModal from '../../components/CreatePlayListModal/CreatePlaylistModal';

const PlaylistList = () => {
  const { playlists } = usePlaylists();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className='section-header'>
        <span>Sort by: Date Added</span>
        <span>Filter: Date Added</span>
        <button
          className='btn-primary btn-xs'
          onClick={() => setIsModalOpen((state) => !state)}>
          Create Playlist
        </button>
      </header>
      <div className='playlist-container'>
        {playlists.map((playlist) => (
          <PlaylistCard
            key={playlist._id}
            _id={playlist._id}
            name={playlist.playlist.title}
            videos={playlist.videos.length}
          />
        ))}
      </div>
      {isModalOpen && <CreatePlaylistModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default PlaylistList;
