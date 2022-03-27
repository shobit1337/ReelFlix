import React, { useState, useEffect } from 'react';
import './VideoPage.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getVideo } from '../../utils/videos';
import { MoreVideos } from './components';
import { useAuth } from '../../context/auth-context';
import { SelectPlaylist } from '../../components';

const VideoPage = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [videoDetails, setVideoDetails] = useState({});

  const handleLike = () => {
    //TODO: Like Functionality
  };

  const getDate = (dateString) => {
    const dateObj = new Date(dateString);
    return `${dateObj.getDate()} / ${
      dateObj.getMonth() + 1
    } / ${dateObj.getFullYear()} `;
  };

  const [isSelectPlaylistModalOpen, setIsSelectPlaylistModalOpen] =
    useState(false);

  const handleAddToPlaylist = async () => {
    if (!user.userDetails) {
      navigate('/login');
    }
    setIsSelectPlaylistModalOpen(true);
  };
  const handleAddToWatchLater = () => {
    if (!user.userDetails) {
      navigate('/login');
    }
  };

  useEffect(() => {
    (async () => {
      let data = await getVideo(videoId);
      if (data._id) {
        setVideoDetails({ ...data });
      } else {
        navigate('/');
      }
    })();
  }, [videoId, navigate]);

  return (
    <>
      {videoDetails ? (
        <div className='text-light video-page-container'>
          <div className='video-section'>
            <iframe
              className='video-iframe'
              src={`https://www.youtube.com/embed/${videoDetails.videoId}`}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen></iframe>
            {/* VIDEO DETAILS */}
            <div className='mt-sm'>
              <div className='d-flex flex-column gap-sm'>
                <div className='text-lg'>{videoDetails.title}</div>
                <div className='d-flex gap-sm text-xs items-center justify-between'>
                  <div className='d-flex gap-sm text-xs items-center'>
                    <span>{videoDetails.creator}</span>
                    <span>{videoDetails.views} Views</span>
                    <span>{getDate(videoDetails.uploadedAt)}</span>
                  </div>
                  <div className='d-flex gap-md text-sm items-center'>
                    <span>
                      <span onClick={handleLike} className='cursor-pointer'>
                        👍
                      </span>{' '}
                      {videoDetails.likes}
                    </span>
                    <span>
                      <span onClick={handleLike} className='cursor-pointer'>
                        👎
                      </span>{' '}
                      {videoDetails.likes}
                    </span>
                    <span
                      onClick={handleAddToPlaylist}
                      className='cursor-pointer'>
                      <i className='fas fa-plus-circle'></i> ADD TO PLAYLIST
                    </span>
                    <span
                      onClick={handleAddToWatchLater}
                      className='cursor-pointer'>
                      <i className='far fa-clock'></i> WATCH LATER
                    </span>
                  </div>
                </div>
              </div>
              {/* DESCRIPTION */}
              <div className='mt-sm'>
                <h3>Description</h3>
                <p>{videoDetails.description}</p>
              </div>
            </div>
          </div>
          {/* Watch More */}
          <MoreVideos />

          {/* Select Playlist Modal */}
          {isSelectPlaylistModalOpen && (
            <SelectPlaylist
              setIsModalOpen={setIsSelectPlaylistModalOpen}
              video={videoDetails}
            />
          )}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default VideoPage;
