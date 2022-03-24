import React, { useEffect, useState } from 'react';
import './SelectPlaylist.css';
import { useAuth } from '../../context/auth-context';
import { usePlaylists } from '../../context/playlist-context';
import { addToPlaylist, getAllPlaylists } from '../../store/playlist/actions';
import CreatePlaylist from '../CreatePlaylist/CreatePlaylist';
import Modal from '../Modal/Modal';

const SelectPlaylist = ({ setIsModalOpen, video }) => {
  const { user } = useAuth();
  const { playlists, dispatchPlaylists } = usePlaylists();
  const [isCreatePlaylist, setIsCreatePlaylist] = useState(false);

  const handleAddToPlaylist = async (playlistId) => {
    await addToPlaylist(
      dispatchPlaylists,
      user.encodedToken,
      playlistId,
      video
    );
    setIsModalOpen(false);
  };

  useEffect(() => {
    getAllPlaylists(dispatchPlaylists, user.encodedToken);
  }, [dispatchPlaylists, user.encodedToken]);

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <h4>Select a playlist to add:</h4>
      <div className='playlist-list'>
        {playlists.length ? (
          playlists.map((playlist) => (
            <button
              className='playlist-list-item'
              disabled={playlist.videos.some((vid) => vid._id === video._id)}
              key={playlist._id}
              onClick={() => handleAddToPlaylist(playlist._id)}>
              {playlist.playlist.title}
            </button>
          ))
        ) : (
          <div className='text-secondary my-sm'>
            Oppss you dont have any playlist.
          </div>
        )}
      </div>

      {isCreatePlaylist ? (
        <CreatePlaylist closeHandler={() => setIsCreatePlaylist(false)} />
      ) : (
        <button
          className='btn-primary btn-xs text-light'
          onClick={() => setIsCreatePlaylist((state) => !state)}>
          Create Playlist
        </button>
      )}
    </Modal>
  );
};

export default SelectPlaylist;
