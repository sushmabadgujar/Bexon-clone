import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/services`;

// GET ALL [get][http://localhost:5000/api/services]
export const getServices = () => axios.get(API_URL);

// GET SINGLE [get][http://localhost:5000/api/services/:id]
export const getSingleService = (id) =>
  axios.get(`${API_URL}/${id}`);

// CREATE [post][http://localhost:5000/api/services]
export const createService = (data) =>
  axios.post(API_URL, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// UPDATE [put][http://localhost:5000/api/services/:id]
export const updateService = (id, data) =>
  
  axios.put(`${API_URL}/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// DELETE [delete][http://localhost:5000/api/services/:id]
export const deleteService = (id) =>
  axios.delete(`${API_URL}/${id}`);