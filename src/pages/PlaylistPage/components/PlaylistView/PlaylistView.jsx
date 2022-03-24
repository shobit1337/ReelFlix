import React, { useEffect, useState } from 'react';
import './PlaylistView.css';
import { useNavigate, useParams } from 'react-router-dom';
import VideoCard from '../../../../components/VideoCard/VideoCard';
import { useAuth } from '../../../../context/auth-context';
import { usePlaylists } from '../../../../context/playlist-context';
import {
  deleteFromPlaylist,
  deletePlaylist,
  getPlaylist,
} from '../../../../store/playlist/actions';

const PlaylistView = () => {
  const { playlistId } = useParams();
  const { user } = useAuth();
  const { dispatchPlaylists } = usePlaylists();
  const [playlist, setPlaylist] = useState({});
  const navigate = useNavigate();

  const handleDeletePlaylist = async () => {
    await deletePlaylist(dispatchPlaylists, user.encodedToken, playlistId);
    navigate('playlist');
  };

  const handleRemoveFromPlaylist = async (videoId) => {
    let updatedPlaylist = await deleteFromPlaylist(
      dispatchPlaylists,
      user.encodedToken,
      playlistId,
      videoId
    );
    setPlaylist(updatedPlaylist);
  };

  useEffect(() => {
    (async () => {
      let data = await getPlaylist(
        dispatchPlaylists,
        user.encodedToken,
        playlistId
      );
      setPlaylist(data);
    })();
  }, [dispatchPlaylists, playlistId, user]);

  return (
    <div>
      <header
        className='d-flex justify-between my-md'
        style={{ width: '100%' }}>
        <h3 className='text-light text-bold'>{playlist?.playlist?.title}</h3>
        <button
          className='btn btn-danger btn-xs'
          onClick={handleDeletePlaylist}>
          Delete this Playlist
        </button>
      </header>
      <div className='d-flex flex-wrap gap-sm'>
        {playlist?.videos?.length ? (
          playlist.videos.map((video) => (
            <div key={video._id} className='playlist-video-card'>
              <VideoCard video={video} />
              <span
                className='delete-video-btn cursor-pointer'
                onClick={() => handleRemoveFromPlaylist(video._id)}>
                ❌
              </span>
            </div>
          ))
        ) : (
          <div className='text-secondary text-md text-center'>
            No video to show here.
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaylistView;
