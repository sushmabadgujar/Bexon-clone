import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/pricing`;

/**
 * Get all pricing plans
 */
export const getPricingPlans = () => {
  return axios.get(API_URL);
};

/**
 * Get single pricing plan by ID
 */
export const getPricingPlanById = (id) => {
  return axios.get(`${API_URL}/edit/${id}`);
};

/**
 * Create new pricing plan
 */
export const createPricingPlan = (data) => {
  return axios.post(API_URL, data);
};

/**
 * Update pricing plan
 */
export const updatePricingPlan = (id, data) => {
  return axios.put(`${API_URL}/${id}`, data);
};

/**
 * Delete pricing plan
 */
export const deletePricingPlan = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};