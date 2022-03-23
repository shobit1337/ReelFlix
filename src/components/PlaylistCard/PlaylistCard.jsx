import React from 'react';
import { useAuth } from '../../context/auth-context';
import { usePlaylists } from '../../context/playlist-context';
import { deletePlaylist } from '../../store/playlist/actions';
import './PlaylistCard.css';

const PlaylistCard = ({ _id, name, videos }) => {
  const { user } = useAuth();
  const { dispatchPlaylists } = usePlaylists();
  const handleDeletePlaylist = async () => {
    await deletePlaylist(dispatchPlaylists, user.encodedToken, _id);
  };
  return (
    <div className='playlist-card'>
      <div>
        <div className='title'>{name}</div>
        <span>{videos} Video</span>
      </div>
      <span onClick={handleDeletePlaylist}>❌</span>
    </div>
  );
};

export default PlaylistCard;
