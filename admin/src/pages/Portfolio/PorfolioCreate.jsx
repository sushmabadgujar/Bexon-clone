import React, { useState } from "react";
import PortfolioForm from "../../components/portfolio/PortfolioForm";
import { createPortfolio } from "../../services/portfolioService";
import { showSuccess, showError } from "../../utils/toast";
import { buildFormData } from "../../utils/buildFormData";
const PortFolio = () => {
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
      console.log(formData.gallery);
      const res = await createPortfolio(form);
      // if (file) {
      //   form.append("gallery", file);
      // }
      // const res = await createPortfolio(formData);
      
      if (res.success) {
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