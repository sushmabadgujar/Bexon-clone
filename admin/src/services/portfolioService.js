
import axios from "axios";

// const API_URL = "http://localhost:5000/api/portfolios";
const API_URL = `${import.meta.env.VITE_API_URL}/api/portfolios`;

// Create Portfolio
export const createPortfolio = async (form) => {
  console.log("Form Data:", form);

  return axios.post(
    `${API_URL}/create-portfolio`,
    form
  );
};
// Get All Portfolios
export const getAllPortfolios = async () => {
  const response = await axios.get(`${API_URL}/all-portfolio`);
  return response.data;
};

// Get Portfolio By Slug
// export const getPortfolioById = (id) => {
//   return axios.get(`${API_URL}/portfolio/${id}`);
// };
export const getPortfolioById = (id) => {

  return axios.get(`${API_URL}/portfolio/${id}`);
};
// Update Portfolio
export const updatePortfolio = (id, data) => {
  return axios.put(`${API_URL}/portfolio/${id}`, data);
};
// Delete Portfolio
export const deletePortfolio = async (id) => {
  const response = await axios.delete(
    `${API_URL}/delete/${id}`
  );

  return response.data;
};