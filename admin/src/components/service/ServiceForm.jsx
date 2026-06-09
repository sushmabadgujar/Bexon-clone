import React from "react";

const ServiceForm = ({
  form,
  setForm,
  onChange,
  onSubmit,
  onImageChange,
  loading,
  submitText
}) => {

  return (
    <div className="card shadow-sm border-0">

      <div className="card-body p-4">

        <form onSubmit={onSubmit}>

          <div className="row">

            <div className="col-md-6 mb-3">
              <label>Title</label>
              <input
                name="title"
                value={form.title}
                onChange={onChange}
                className="form-control"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Icon Class</label>
              <input
                name="icon"
                value={form.icon}
                onChange={onChange}
                className="form-control"
                placeholder="bi bi-code-slash"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Category</label>
              <input
                name="category"
                value={form.category}
                onChange={onChange}
                className="form-control"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Status</label>

              <select
                name="status"
                value={form.status}
                onChange={onChange}
                className="form-select"
              >
                <option value="active">
                  Active
                </option>

                <option value="inactive">
                  Inactive
                </option>

              </select>

            </div>

          </div>

          {/* IMAGE */}

          <div className="mb-3">

            <label>Service Image</label>

            <input
              type="file"
              className="form-control"
              onChange={onImageChange}
            />

          </div>

          {/* SHORT DESC */}

          <div className="mb-3">

            <label>Short Description</label>

            <textarea
              rows="3"
              name="shortDescription"
              value={form.shortDescription}
              onChange={onChange}
              className="form-control"
            />

          </div>

          {/* LONG DESC */}

          <div className="mb-3">

            <label>Long Description</label>

            <textarea
              rows="6"
              name="longDescription"
              value={form.longDescription}
              onChange={onChange}
              className="form-control"
            />

          </div>

          {/* FEATURES */}

          <h6 className="mt-4">
            Features
          </h6>

          {form.features.map((feature, index) => (

            <div
              className="d-flex mb-2"
              key={index}
            >

              <input
                value={feature}
                className="form-control"
                placeholder="Feature"
                onChange={(e) => {

                  const updated =
                    [...form.features];

                  updated[index] =
                    e.target.value;

                  setForm({
                    ...form,
                    features: updated
                  });

                }}
              />

              <button
                type="button"
                className="btn btn-danger ms-2"
                onClick={() => {

                  const updated =
                    form.features.filter(
                      (_, i) => i !== index
                    );

                  setForm({
                    ...form,
                    features: updated
                  });

                }}
              >
                X
              </button>

            </div>

          ))}

          <button
            type="button"
            className="btn btn-secondary mb-3"
            onClick={() =>
              setForm({
                ...form,
                features: [
                  ...form.features,
                  ""
                ]
              })
            }
          >
            Add Feature
          </button>

          {/* FEATURED */}

          <div className="form-check mb-4">

            <input
              type="checkbox"
              className="form-check-input"
              checked={form.isFeatured}
              onChange={(e) =>
                setForm({
                  ...form,
                  isFeatured:
                    e.target.checked
                })
              }
            />

            <label className="form-check-label">
              Featured Service
            </label>

          </div>

          <button
            type="submit"
            className="btn btn-dark"
            disabled={loading}
          >
            {loading
              ? "Saving..."
              : submitText}
          </button>

        </form>

      </div>

    </div>
  );
};

export default ServiceForm;