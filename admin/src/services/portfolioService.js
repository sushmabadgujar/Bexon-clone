import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/portfolios`;

// Create Portfolio[post][http://localhost:5000/api/portfolios/create-portfolio]
export const createPortfolio = async (form) => {
  console.log("Form Data:", form);

  return axios.post(
    `${API_URL}/create-portfolio`,
    form
  );
};

// Get All Portfolios[get][http://localhost:5000/api/portfolios/all-portfolio]
export const getAllPortfolios = async () => {
  const response = await axios.get(`${API_URL}/all-portfolio`);
  return response.data;
};

// Get Portfolio by id[get][http://localhost:5000/api/portfolios/:id]
export const getPortfolioById = (id) => {

  return axios.get(`${API_URL}/portfolio/${id}`);
};

// Update Portfolio[put][http://localhost:5000/api/portfolios/:id]
export const updatePortfolio = (id, data) => {
  return axios.put(`${API_URL}/portfolio/${id}`, data);
};

// Delete PortFolio Seprate Image[delete][http://localhost:5000/api/portfolios/:id/imagepath]
export const deletePortfolioImage = (id, image) => {
  return axios.delete(
    `${API_URL}/${id}/image`,
    { data: { image } }
  );
};

// Delete Portfolio [delete][http://localhost:5000/api/portfolios/delete/:id
export const deletePortfolio = async (id) => {
  const response = await axios.delete(
    `${API_URL}/delete/${id}`
  );

  return response.data;
};