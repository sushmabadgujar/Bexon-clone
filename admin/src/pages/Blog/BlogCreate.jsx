import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogForm from "../../components/Blog/BlogForm";
import { createBlog } from "../../services/blogService";
import { showSuccess, showError } from "../../utils/toast";
const BlogCreate = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    shortDescription: "",
    content: "",
    featuredImage: "",
    authorName: "",
    authorImage: "",
    category: "",
    tags: "",
    isPublished: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        ...formData,
        tags: formData.tags
          ? formData.tags.split(",").map((tag) => tag.trim())
          : [],
        author: {
          name: formData.authorName,
          image: formData.authorImage,
        },
      };

      delete payload.authorName;
      delete payload.authorImage;

      await createBlog(payload);
      showSuccess("Blog Created Successfully")
      navigate("/blog-list");

    } catch (error) {
      showError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BlogForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      loading={loading}
      submitText="Create Blog"
    />
  );
};

export default BlogCreate;