import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getWatchLater = async (token) => {
  try {
    let { data } = await axios.get(`${API_URL}/user/watchLater`, {
      headers: { authorization: token },
    });
    if (data.watchLater) return data.watchLater;
    return [];
  } catch (err) {
    throw new Error('Failed to get Watch Later.');
  }
};

export const addWatchLater = async (token, video) => {
  try {
    let { data } = await axios.post(
      `${API_URL}/user/watchLater`,
      { video: video },
      {
        headers: { authorization: token },
      }
    );
    if (data.watchLater) return data.watchLater;
    return [];
  } catch (err) {
    throw new Error('Failed to add to Watch Later.');
  }
};

export const deleteWatchLater = async (token, videoId) => {
  try {
    let { data } = await axios.delete(`${API_URL}/user/watchLater/${videoId}`, {
      headers: { authorization: token },
    });
    if (data.watchLater) return data.watchLater;
    return [];
  } catch (err) {
    throw new Error('Failed to remove from Watch Later.');
  }
};

export const deleteAllWatchLater = async (token) => {
  try {
    let { data } = await axios.delete(`${API_URL}/user/watchLater/all`, {
      headers: { authorization: token },
    });
    if (data.watchLater) return data.watchLater;
    return [];
  } catch (err) {
    throw new Error('Failed to remove the Watch Later.');
  }
};
