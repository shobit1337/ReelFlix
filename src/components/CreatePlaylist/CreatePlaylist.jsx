import React, { useRef } from 'react';
import { useAuth } from '../../context/auth-context';
import { usePlaylists } from '../../context/playlist-context';
import { createPlaylist } from '../../store/playlist/actions';

const CreatePlaylist = ({ closeHandler }) => {
  const title = useRef('');
  const description = useRef('');
  const { user } = useAuth();
  const { dispatchPlaylists } = usePlaylists();

  const createPlaylistHandler = async (e) => {
    e.preventDefault();
    let playlistTitle = title.current.value;
    let playlistDescription = description.current.value;
    if (playlistTitle && playlistDescription) {
      createPlaylist(dispatchPlaylists, user.encodedToken, {
        playlist: { title: playlistTitle, description: playlistDescription },
      });
      closeHandler();
    }
  };

  return (
    <div className='d-flex flex-center flex-column gap-xs'>
      <div>
        <label htmlFor='playlist-title'>Playlist Title:</label>{' '}
        <input
          className='input-text'
          type='text'
          ref={title}
          name='playlist-title'
          id='playlist-title'
        />
      </div>
      <div>
        <label htmlFor='playlist-description'>Description:</label>{' '}
        <input
          className='input-text'
          type='text'
          ref={description}
          name='playlist-description'
          id='playlist-description'
        />
      </div>
      <div className='d-flex gap-sm'>
        <button className='btn-primary btn-xs' onClick={createPlaylistHandler}>
          Create
        </button>
        <button className='btn-danger btn-xs' onClick={closeHandler}>
          Cancle
        </button>
      </div>
    </div>
  );
};

export default CreatePlaylist;
