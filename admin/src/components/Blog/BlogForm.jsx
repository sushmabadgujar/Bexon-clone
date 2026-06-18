import React from "react";

const BlogForm = ({
  formData,
  handleChange,
  handleSubmit,
  loading,
  submitText = "Save Blog",
}) => {
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">

          {/* Title */}
          <div className="col-md-6 mb-3">
            <label>Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Slug */}
          <div className="col-md-6 mb-3">
            <label>Slug</label>
            <input
              type="text"
              name="slug"
              className="form-control"
              value={formData.slug}
              onChange={handleChange}
            />
          </div>

          {/* Category */}
          <div className="col-md-6 mb-3">
            <label>Category</label>
            <input
              type="text"
              name="category"
              className="form-control"
              value={formData.category}
              onChange={handleChange}
            />
          </div>

          {/* Tags */}
          <div className="col-md-6 mb-3">
            <label>Tags (comma separated)</label>
            <input
              type="text"
              name="tags"
              className="form-control"
              value={formData.tags}
              onChange={handleChange}
              placeholder="React, Node, Laravel"
            />
          </div>

          {/* Author Name */}
          <div className="col-md-6 mb-3">
            <label>Author Name</label>
            <input
              type="text"
              name="authorName"
              className="form-control"
              value={formData.authorName}
              onChange={handleChange}
            />
          </div>

          {/* Author Image */}
          <div className="col-md-6 mb-3">
            <label>Author Image URL</label>
            <input
              type="text"
              name="authorImage"
              className="form-control"
              value={formData.authorImage}
              onChange={handleChange}
            />
          </div>

          {/* Featured Image */}
          <div className="col-md-12 mb-3">
            <label>Featured Image URL</label>
            <input
              type="text"
              name="featuredImage"
              className="form-control"
              value={formData.featuredImage}
              onChange={handleChange}
            />
          </div>

          {/* Short Description */}
          <div className="col-md-12 mb-3">
            <label>Short Description</label>
            <textarea
              name="shortDescription"
              rows="3"
              className="form-control"
              value={formData.shortDescription}
              onChange={handleChange}
            />
          </div>

          {/* Content */}
          <div className="col-md-12 mb-3">
            <label>Content</label>
            <textarea
              name="content"
              rows="10"
              className="form-control"
              value={formData.content}
              onChange={handleChange}
              required
            />
          </div>

          {/* Published */}
          <div className="col-md-12 mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                name="isPublished"
                className="form-check-input"
                checked={formData.isPublished}
                onChange={(e) =>
                  handleChange({
                    target: {
                      name: "isPublished",
                      value: e.target.checked,
                    },
                  })
                }
              />

              <label className="form-check-label">
                Published
              </label>
            </div>
          </div>

          <div className="col-md-12">
            <button
              type="submit"
              className="btn btn-dark"
              disabled={loading}
            >
              {loading ? "Saving..." : submitText}
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default BlogForm;