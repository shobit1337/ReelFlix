import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getAllVideos = async () => {
  try {
    let { data } = await axios.get(`${API_URL}/videos`);
    if (data.videos) return data.videos;
    return [];
  } catch (err) {
    throw new Error('Failed to fetch Videos');
  }
};

export const getVideo = async (id) => {
  try {
    let { data } = await axios.get(`${API_URL}/videos/${id}`);
    if (data.video) return data.video;
    return;
  } catch (err) {
    throw new Error('Failed to fetch Videos');
  }
};
