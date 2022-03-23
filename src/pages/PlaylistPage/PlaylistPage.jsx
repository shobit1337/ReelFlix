import React, { useEffect, useState } from 'react';
import PlaylistCard from '../../components/PlaylistCard/PlaylistCard';
import { useAuth } from '../../context/auth-context';
import { usePlaylists } from '../../context/playlist-context';
import { getAllPlaylists } from '../../store/playlist/actions';
import CreatePlaylistModal from './components/CreatePlayListModal/CreatePlaylistModal';

const PlaylistPage = () => {
  const { user } = useAuth();
  const { playlists, dispatchPlaylists } = usePlaylists();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getAllPlaylists(dispatchPlaylists, user.encodedToken);
  }, [dispatchPlaylists, user.encodedToken]);

  return (
    <div>
      <h3 className='section-title'>My Playlists</h3>
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
    </div>
  );
};

export default PlaylistPage;
