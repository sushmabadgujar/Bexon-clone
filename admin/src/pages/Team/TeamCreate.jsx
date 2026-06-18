import React, { useState } from "react";
import TeamForm from "../../components/team/TeamForm";
import { useParams, useNavigate } from "react-router-dom";
import { showSuccess, showError } from "../../utils/toast";
import { createTeam } from "../../services/teamService";
import { buildFormData } from "../../utils/buildFormData";
const TeamCreate = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const SKILLS_LIST = [
    "Business Consultants",
    "Client Communication",
  ];
  const [form, setForm] = useState({
    name: "",
    designation: "",
    email: "",
    phone: "",
    shortBio: "",
    about: "",
    location: "",
    experience: "",
    skills: SKILLS_LIST.map(name => ({
      name,
      percentage: ""
    })),
    socialLinks: {
      facebook: "",
      twitter: "",
      linkedin: "",
      instagram: ""
    }
  });

  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const formData = buildFormData(form);
      if (file) {
        formData.append("image", file);
      }
      await createTeam(formData);
      navigate("/team-list");
      showSuccess("Team member created");

    } catch (err) {
      console.log(err);
      showError(
        err?.response?.data?.message ||
        "Failed to create member"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <TeamForm
      form={form}
      loading={loading}
      submitText="Create Team Member"
      setForm={setForm}
      onChange={(e) =>
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        })
      }
      onImageChange={(e) =>
        setFile(e.target.files[0])
      }
      
      onSubmit={handleSubmit}
    />
  );
};

export default TeamCreate;