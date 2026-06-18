import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BlogForm from "../../components/Blog/BlogForm";
import { getBlogById,updateBlog} from "../../services/blogService";
import { showSuccess,showError } from "../../utils/toast";
const BlogEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

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

  // Fetch single blog
  const fetchBlog = async () => {
    try {
      setLoading(true);
      const res = await getBlogById(id);
      const blog = res.data.blog;
    
      setFormData({
        title: blog.title || "",
        slug: blog.slug || "",
        shortDescription: blog.shortDescription || "",
        content: blog.content || "",
        featuredImage: blog.featuredImage || "",
        authorName: blog.author?.name || "",
        authorImage: blog.author?.image || "",
        category: blog.category || "",
        tags: blog.tags ? blog.tags.join(", ") : "",
        isPublished: blog.isPublished ?? true,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit update
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

      await updateBlog(id, payload);
      navigate("/blog-list");
      showSuccess("Blog Updated Successfully")
    } catch (error) {
      showError(error)
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
      submitText="Update Blog"
    />
  );
};

export default BlogEdit;