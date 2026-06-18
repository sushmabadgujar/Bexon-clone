import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/blogs`; // apna backend URL

// Create Blog
export const createBlog = (data) => {
  return axios.post(`${API_URL}/create-blog`, data);
};

// Get All Blogs
export const getBlogs = () => {
  return axios.get(`${API_URL}/get-blog`);
};

// Get Blog By Id
export const getBlogById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

// Update Blog
export const updateBlog = (id, data) => {
  return axios.put(`${API_URL}/${id}`, data);
};

// Delete Blog
export const deleteBlog = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};