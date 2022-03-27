import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getHistory = async (token) => {
  try {
    let { data } = await axios.get(`${API_URL}/user/history`, {
      headers: { authorization: token },
    });
    if (data.history) return data.history;
    return [];
  } catch (err) {
    throw new Error('Failed to get History.');
  }
};

export const setHistory = async (token, video) => {
  try {
    let { data } = await axios.post(
      `${API_URL}/user/history`,
      { video: video },
      {
        headers: { authorization: token },
      }
    );
    if (data.history) return data.history;
    return [];
  } catch (err) {
    console.log('Error: ', err);
    throw new Error('Failed to add to history.');
  }
};

export const deleteHistory = async (token, videoId) => {
  try {
    let { data } = await axios.delete(`${API_URL}/user/history/${videoId}`, {
      headers: { authorization: token },
    });
    if (data.history) return data.history;
    return [];
  } catch (err) {
    throw new Error('Failed to remove from history.');
  }
};

export const deleteAllHistory = async (token) => {
  try {
    let { data } = await axios.delete(`${API_URL}/user/history/all`, {
      headers: { authorization: token },
    });
    if (data.history) return data.history;
    return [];
  } catch (err) {
    throw new Error('Failed to remove the history.');
  }
};
