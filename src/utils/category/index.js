import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getAllCategories = async () => {
  try {
    let { data } = await axios.get(`${API_URL}/categories`);
    if (data.categories) return data.categories;
    return [];
  } catch (err) {
    throw new Error('Failed to fetch categories.');
  }
};

export const getCategory = async (id) => {
  try {
    let { data } = await axios.get(`${API_URL}/categories/${id}`);
    if (data.category) return data.category;
    return;
  } catch (err) {
    throw new Error('Failed to fetch category.');
  }
};
