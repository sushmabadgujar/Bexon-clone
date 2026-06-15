import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PortfolioForm from "../../components/portfolio/PortfolioForm";
import { getPortfolioById, updatePortfolio, deletePortfolioImage } from "../../services/portfolioService";
import { buildFormData } from "../../utils/buildFormData";
import { showSuccess } from "../../utils/toast";

const PortfolioEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [existingGallery, setExistingGallery] = useState([]);
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

  // GET BY ID
  useEffect(() => {
    const fetchData = async () => {
      console.log("fetchid working");
      const res = await getPortfolioById(id);
      const data = res.data.data;

      setFormData({
        ...data,
        overview: data.overview?.join(",") || "",
        gallery: [],
        completedAt: data.completedAt
          ? new Date(data.completedAt).toISOString().split("T")[0]
          : "",
      });
      console.log("FULL API RESPONSE:", res);
      console.log("DATA:", res.data.data);
      console.log("GALLERY:", res.data.data?.gallery);

      setExistingGallery(data.gallery || []);
    };

    fetchData();
  }, [id]);

  // CHANGE HANDLER
  const handleChange = (e) => {
    const { name, value, files, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? Array.from(files) : value,
    }));
  };

  // SUBMIT UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const form = buildFormData(formData);

      const res = await updatePortfolio(id, form);

      if (res.data.success) {
        showSuccess("Portfolio Updated Successfully");
        navigate("/portfolio");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const removeExistingImage = async (imagePath, index) => {
    try {
      const res = await deletePortfolioImage(id, imagePath);

      if (res.data.success) {
        setExistingGallery((prev) =>
          prev.filter((_, i) => i !== index)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PortfolioForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      loading={loading}
      buttonText="Update Portfolio"
      existingGallery={existingGallery}
      removeExistingImage={removeExistingImage}
    />
  );
};

export default PortfolioEdit;