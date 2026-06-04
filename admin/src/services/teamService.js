import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/team`;

export const getTeams = () => axios.get(API_URL);

export const createTeam = (data) =>
  axios.post(`${API_URL}/create-team`, data);

export const getSingleTeam = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const updateTeam = (id, data) =>
  axios.put(`${API_URL}/${id}`, data);

export const deleteTeam = (id) =>
  axios.delete(`${API_URL}/${id}`);
