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
    let { data } = await axios.get(`${API_URL}/video/${id}`);
    if (data.video) return data.video;
    return {};
  } catch (err) {
    if (err.response.status === 500) {
      return {};
    }
    throw new Error('Failed to fetch Videos');
  }
};

export const getPaginatedVideos = (videos, page, limit) => {
  page = Number(page);
  limit = Number(limit);

  const startIndex = 0;
  const endIndex = limit * page;

  const totalPages = Math.ceil(videos.length / limit);
  const nextPage = page + 1 <= totalPages ? page + 1 : 1;

  return {
    list: videos.slice(startIndex, endIndex),
    info: {
      nextPage,
      startIndex,
      endIndex,
      totalProducts: videos.length,
      totalPages,
    },
  };
};
