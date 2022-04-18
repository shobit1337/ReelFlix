import React, { useState, useEffect } from 'react';
import './LikeDislikeSection.css';
import { useAuth } from '../../../../context/auth-context';
import {
  addDislike,
  addLike,
  deleteDislike,
  deleteLike,
  getDislikes,
  getLikes,
} from '../../../../utils/like-dislike';
import { useNavigate } from 'react-router-dom';

const LikeDislikeSection = ({ video }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [likes, setLikes] = useState(null);
  const [dislikes, setDislikes] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLike = async () => {
    if (!user?.userDetails) {
      navigate('/login');
    }
    setIsLoading(true);
    if (isDisliked) {
      const newDislikes = await deleteDislike(user.encodedToken, video._id);
      if (newDislikes || newDislikes === 0) {
        setDislikes(newDislikes);
        setIsDisliked(false);
      }
    }
    const newLikes = await addLike(user.encodedToken, video);
    if (newLikes || newLikes === 0) {
      setLikes(newLikes);
      setIsLiked(true);
      setIsLoading(false);
    }
  };

  const handleDislike = async () => {
    if (!user?.userDetails) {
      navigate('/login');
    }
    setIsLoading(true);
    if (isLiked) {
      const newLikes = await deleteLike(user.encodedToken, video._id);
      if (newLikes || newLikes === 0) {
        setLikes(newLikes);
        setIsLiked(false);
      }
    }
    const newDislikes = await addDislike(user.encodedToken, video);
    if (newDislikes || newDislikes === 0) {
      setDislikes(newDislikes);
      setIsDisliked(true);
    }
    setIsLoading(false);
  };

  const removeLike = async () => {
    if (!user?.userDetails) {
      navigate('/login');
    }
    setIsLoading(true);
    const newLikes = await deleteLike(user.encodedToken, video._id);
    if (newLikes || newLikes === 0) {
      setLikes(newLikes);
      setIsLiked(false);
    }
    setIsLoading(false);
  };

  const removeDislike = async () => {
    if (!user?.userDetails) {
      navigate('/login');
    }
    setIsLoading(true);
    const newDislikes = await deleteDislike(user.encodedToken, video._id);
    if (newDislikes || newDislikes === 0) {
      setDislikes(newDislikes);
      setIsDisliked(false);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    (async () => {
      setLikes(video.likes);
      setDislikes(video.dislikes);
      const userLikes = await getLikes(user.encodedToken);
      if (userLikes.some((vid) => vid._id === video._id)) {
        setIsLiked(true);
      }
      const userDislikes = await getDislikes(user.encodedToken);
      if (userDislikes.some((vid) => vid._id === video._id)) {
        setIsDisliked(true);
      }
      setIsLoading(false);
    })();

    return () => {
      setLikes(null);
      setDislikes(null);
      setIsLiked(false);
      setIsDisliked(false);
      setIsLoading(true);
    };
  }, [user, video]);

  return (
    <div className='like-dislike-conatiner'>
      {!isLoading ? (
        <>
          <span>
            {isLiked ? (
              <span onClick={removeLike} className='cursor-pointer'>
                <ActiveLikeIcon />
              </span>
            ) : (
              <span onClick={handleLike} className='cursor-pointer'>
                <LikeIcon />
              </span>
            )}
            <span className='ml-xxxs'>{likes}</span>
          </span>
          <span>
            {isDisliked ? (
              <span onClick={removeDislike} className='cursor-pointer'>
                <ActiveDislikeIcon />
              </span>
            ) : (
              <span onClick={handleDislike} className='cursor-pointer'>
                <DislikeIcon />
              </span>
            )}

            <span className='ml-xxxs'>{dislikes}</span>
          </span>{' '}
        </>
      ) : (
        <div className='like-loader'>Loading...</div>
      )}
    </div>
  );
};

const ActiveDislikeIcon = () => <i className='fas fa-thumbs-down'></i>;
const ActiveLikeIcon = () => <i className='fas fa-thumbs-up'></i>;
const DislikeIcon = () => <i className='far fa-thumbs-down'></i>;
const LikeIcon = () => <i className='far fa-thumbs-up'></i>;

export default LikeDislikeSection;
