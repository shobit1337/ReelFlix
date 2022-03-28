import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

//Like
export const getLikes = async (token) => {
  try {
    let { data } = await axios.get(`${API_URL}/user/likes`, {
      headers: { authorization: token },
    });
    if (data.likes) return data.likes;
    return [];
  } catch (err) {
    throw new Error('Failed to get Likes.');
  }
};

export const addLike = async (token, video) => {
  try {
    let { data } = await axios.post(
      `${API_URL}/user/likes`,
      { video: video },
      {
        headers: { authorization: token },
      }
    );
    if (data.likes || data.likes === 0) return data.likes;
    return null;
  } catch (err) {
    throw new Error('Failed to give Like.');
  }
};

export const deleteLike = async (token, videoId) => {
  try {
    let { data } = await axios.delete(`${API_URL}/user/likes/${videoId}`, {
      headers: { authorization: token },
    });
    if (data.likes || data.likes === 0) return data.likes;
    return null;
  } catch (err) {
    throw new Error('Failed to remove Like');
  }
};

// Dislike
export const getDislikes = async (token) => {
  try {
    let { data } = await axios.get(`${API_URL}/user/dislikes`, {
      headers: { authorization: token },
    });
    if (data.dislikes || data.dislikes === 0) return data.dislikes;
    return [];
  } catch (err) {
    throw new Error('Failed to get Dislikes.');
  }
};

export const addDislike = async (token, video) => {
  try {
    let { data } = await axios.post(
      `${API_URL}/user/dislikes`,
      { video: video },
      {
        headers: { authorization: token },
      }
    );
    if (data.dislikes || data.dislikes === 0) return data.dislikes;
    return null;
  } catch (err) {
    throw new Error('Failed to give Dislike.');
  }
};

export const deleteDislike = async (token, videoId) => {
  try {
    let { data } = await axios.delete(`${API_URL}/user/dislikes/${videoId}`, {
      headers: { authorization: token },
    });
    if (data.dislikes || data.dislikes === 0) return data.dislikes;
    return null;
  } catch (err) {
    throw new Error('Failed to remove Dislike');
  }
};
