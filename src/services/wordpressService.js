// src/services/wordpressService.js
import axios from 'axios';

const API_URL = 'http://interior-design.local/wp-json/wp/v2';

export const getPosts = async (postType = 'posts', params = {}) => {
  try {
    const response = await axios.get(`${API_URL}/${postType}`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching WordPress data:', error);
    return [];
  }
};

export const getPostBySlug = async (postType, slug) => {
  try {
    const response = await axios.get(`${API_URL}/${postType}?slug=${slug}`);
    return response.data[0] || null;
  } catch (error) {
    console.error('Error fetching WordPress post:', error);
    return null;
  }
};

export const getMedia = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/media/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching WordPress media:', error);
    return null;
  }
};