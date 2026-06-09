import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleService, updateService } from "../../services/serviceService";
import { buildFormData } from "../../utils/buildFormData";
import ServiceForm from "../../components/service/ServiceForm";
import { showSuccess, showError } from "../../utils/toast";

const ServiceEdit = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    shortDescription: "",
    longDescription: "",
    icon: "",
    category: "",
    status: "active",
    isFeatured: false,
    features: [],
    image: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getSingleService(id);

        setForm({
          ...res.data.data,
          image: "", 
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = buildFormData(form);

      const res = await updateService(id, formData);

       showSuccess("Service Updated Successfully");
    } catch (err) {
     showError("Failed to update service");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ServiceForm
      form={form}
      setForm={setForm}
      onChange={handleChange}
      onImageChange={(e) => {
        const file = e.target.files[0];

        setForm((prev) => ({
          ...prev,
          image: file,
        }));
      }}
      onSubmit={handleSubmit}
      loading={loading}
      submitText="Update Service"
    />
  );
};

export default ServiceEdit;