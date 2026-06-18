import React from "react";
import { useNavigate } from "react-router-dom";
import CareerForm from "../../components/career/CareerForm";
import { createCareer } from "../../services/careerService";
import { showError, showSuccess } from "../../utils/toast";

const CareerCreate = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      await createCareer(formData);

      showSuccess("Career Created Successfully");
      navigate("/career-list");
    } catch (error) {
       showError(
    error.response?.data?.message || error.message
  );
    }
  };

  return (
    <div className="container mt-4">
      <CareerForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CareerCreate;