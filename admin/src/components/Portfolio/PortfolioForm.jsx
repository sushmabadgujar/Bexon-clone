import React from "react";

const PortfolioForm = ({
  formData,
  handleChange,
  handleSubmit,
  loading,
  buttonText = "Save Portfolio",
  existingGallery,
  removeExistingImage,
}) => {
  return (
    <div className="card shadow-sm border-0">

      <div className="card-body p-4">
        <form onSubmit={handleSubmit}>
          <div className="row">

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
            <div className="col-md-12 mb-3">
              <label>Short Description</label>
              <textarea
                name="shortDescription"
                className="form-control"
                rows="3"
                value={formData.shortDescription}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-12 mb-3">
              <label>Long Description</label>
              <textarea
                name="longDescription"
                className="form-control"
                rows="5"
                value={formData.longDescription}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-12 mb-3">
              <label>Overview (comma separated)</label>
              <textarea
                name="overview"
                className="form-control"
                rows="3"
                value={formData.overview}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-12 mb-3">
              <label className="form-label fw-semibold">Gallery</label>

              <input
                type="file"
                name="gallery"
                multiple
                className="form-control"
                onChange={handleChange}
              />
            </div>

            {/* Existing Images Section */}
            {existingGallery?.length > 0 && (
              <div className="col-md-12 mb-4">
                <label className="form-label fw-semibold">
                  Existing Images
                </label>

                <div className="row g-3">
                  {existingGallery.map((img, index) => (
                    <div key={index} className="col-6 col-md-3 col-lg-2">
                      <div className="card shadow-sm border-0 h-100">

                        {/* Image */}
                        <img
                          src={`${import.meta.env.VITE_API_URL}${img}`}
                          alt="gallery"
                          className="card-img-top"
                          style={{
                            height: "150px",
                            objectFit: "cover",
                          }}
                        />

                        {/* Remove Button */}
                        <div className="card-body p-2 text-center">
                          <button
                            type="button"
                            className="btn btn-outline-danger btn-sm w-100"
                            onClick={() => removeExistingImage(img,index)}
                          >
                            Remove
                          </button>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="col-md-6 mb-3">
              <label>Client Name</label>
              <input
                type="text"
                name="clientName"
                className="form-control"
                value={formData.clientName}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Budget</label>
              <input
                type="text"
                name="budget"
                className="form-control"
                value={formData.budget}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Location</label>
              <input
                type="text"
                name="location"
                className="form-control"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Sector</label>
              <input
                type="text"
                name="sector"
                className="form-control"
                value={formData.sector}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Completed Date</label>
              <input
                type="date"
                name="completedAt"
                className="form-control"
                value={formData.completedAt}
                onChange={handleChange}
              />
            </div>

          </div>

          <button
            type="submit"
            className="btn btn-dark"
            disabled={loading}
          >
            {loading ? "Please Wait..." : buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PortfolioForm;