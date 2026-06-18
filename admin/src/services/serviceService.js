import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/services`;

const getServices = () => axios.get(API_URL);

const getSingleService = (id) =>
  axios.get(`${API_URL}/${id}`);

const createService = (data) =>
  axios.post(API_URL, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

const updateService = (id, data) =>
  axios.put(`${API_URL}/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

const deleteService = (id) =>
  axios.delete(`${API_URL}/${id}`);

export {
  getServices,
  getSingleService,
  createService,
  updateService,
  deleteService,
};