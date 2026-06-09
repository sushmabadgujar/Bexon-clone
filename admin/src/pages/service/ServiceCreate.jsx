import React, { useState } from "react";
import ServiceForm from "../../components/service/ServiceForm";
import { createService } from "../../services/serviceService";
import { buildFormData } from "../../utils/buildFormData";
import { showSuccess, showError } from "../../utils/toast";
const Service = () => {

  const [loading, setLoading] = useState(false);

  const [file, setFile] = useState(null);

  const [form, setForm] = useState({
    title: "",
    shortDescription: "",
    longDescription: "",
    icon: "",
    category: "general",
    isFeatured: false,
    status: "active",
    features: [""]
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);

      const formData = buildFormData(form);

      if (file) {
        formData.append("image", file);
      }

      await createService(formData);
       showSuccess("Service created");
    
    } catch (error) {
      showError(
              error?.response?.data?.message ||
              "Failed to create member"
            );
    } finally {
      setLoading(false);
    }
  };

  return (
    <ServiceForm
      form={form}
      setForm={setForm}
      loading={loading}
      submitText="Create Service"
      onSubmit={handleSubmit}
      onImageChange={(e) =>
        setFile(e.target.files[0])
      }
      onChange={(e) =>
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
      }
    />
  );
};

export default Service;