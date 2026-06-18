import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/career`;

export const createCareer = (data) =>
  axios.post(`${API_URL}`, data);

export const getCareers = () =>
  axios.get(`${API_URL}`);

export const getCareerById = (id) =>
  axios.get(`${API_URL}/${id}`);

export const updateCareer = (id, data) =>
  axios.put(`${API_URL}/${id}`, data);

export const deleteCareer = (id) =>
  axios.delete(`${API_URL}/${id}`);