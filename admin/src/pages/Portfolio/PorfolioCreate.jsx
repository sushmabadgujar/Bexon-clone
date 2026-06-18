import React, { useState } from "react";
import PortfolioForm from "../../components/portfolio/PortfolioForm";
import { createPortfolio } from "../../services/portfolioService";
import { showSuccess, showError } from "../../utils/toast";
import { buildFormData } from "../../utils/buildFormData";
import { useNavigate } from "react-router-dom";
const PortFolio = () => {
   const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    shortDescription: "",
    longDescription: "",
    overview: "",
    clientName: "",
    budget: "",
    location: "",
    sector: "",
    completedAt: "",
    gallery: [],
  });

  const handleChange = (e) => {
     const { name, value, files, type } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]:
      type === "file"
        ? Array.from(files)
        : value,
  }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const form = buildFormData(formData);
      const res = await createPortfolio(form);
      if (res.data.success) {
        navigate('/portfolio-list');
        showSuccess("Portfolio Created Successfully");
      }
    } catch (error) {

      showError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PortfolioForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      loading={loading}
      buttonText="Create Portfolio"
    />
  );
};

export default PortFolio;