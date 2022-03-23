import React, { useRef } from 'react';
import { Modal } from '../../../../components';
import { useAuth } from '../../../../context/auth-context';
import { usePlaylists } from '../../../../context/playlist-context';
import { createPlaylist } from '../../../../store/playlist/actions';

const CreatePlaylistModal = ({ setIsModalOpen }) => {
  const title = useRef('');
  const description = useRef('');
  const { user } = useAuth();
  const { dispatchPlaylists } = usePlaylists();

  const createPlaylistHandler = async (e) => {
    e.preventDefault();
    let playlistTitle = title.current.value;
    let playlistDescription = description.current.value;
    if (playlistTitle && playlistDescription) {
      await createPlaylist(dispatchPlaylists, user.encodedToken, {
        playlist: { title: playlistTitle, description: playlistDescription },
      });
      setIsModalOpen(false);
    }
  };

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <div className='d-flex flex-center flex-column gap-xs'>
        <label htmlFor='playlist-title'>Title:</label>
        <input
          className='input-text'
          type='text'
          ref={title}
          name='playlist-title'
          id='playlist-title'
        />
        <label htmlFor='playlist-description'>Description:</label>
        <input
          className='input-text'
          type='text'
          ref={description}
          name='playlist-description'
          id='playlist-description'
        />
        <button className='btn-primary btn-xs' onClick={createPlaylistHandler}>
          Create
        </button>
      </div>
    </Modal>
  );
};

export default CreatePlaylistModal;
