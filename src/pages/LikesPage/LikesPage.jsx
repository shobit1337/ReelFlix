import React, { useState, useEffect } from 'react';
import { VideoCard } from '../../components';
import { useAuth } from '../../context/auth-context';
import { deleteLike, getLikes } from '../../utils/like-dislike';

const LikesPage = () => {
  const [videoList, setVideoList] = useState([]);
  const { user } = useAuth();

  const handleRemoveLike = async (videoId) => {
    const data = await deleteLike(user.encodedToken, videoId);
    if (data || data === 0) {
      setVideoList(videoList.filter((video) => video._id !== videoId));
    }
  };

  useEffect(() => {
    (async () => {
      const data = await getLikes(user.encodedToken);
      setVideoList([...data].reverse());
    })();
    return () => {
      setVideoList([]);
    };
  }, [user]);

  return (
    <div className='listing-section'>
      <h3 className='section-title'>My Liked Videos</h3>
      <div className='listing-container mt-sm'>
        {videoList.length ? (
          videoList.map((video) => (
            <div key={video._id} className='playlist-video-card'>
              <VideoCard video={video} />
              <span
                className='delete-video-btn cursor-pointer'
                onClick={() => handleRemoveLike(video._id)}>
                ❌
              </span>
            </div>
          ))
        ) : (
          <div className='text-secondary text-center text-md flex-grow'>
            {' '}
            You haven't liked anything.
          </div>
        )}
      </div>
    </div>
  );
};

export default LikesPage;
