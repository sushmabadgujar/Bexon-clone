import React, {
  useState,
  useEffect,
} from "react";

const CareerForm = ({
  initialData,
  onSubmit,
}) => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    company: "",
    location: "",
    jobType: "Full Time",
    jobNumber: "",
    website: "",
    salary: "",
    vacancy: "",
    applyDeadline: "",
    shortDescription: "",
    description: "",
    requirements: "",
    responsibilities: "",
    tags: "",
    featuredImage: null,
    isFeatured: false,
    status: "active",
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        ...initialData,

        requirements:
          initialData.requirements?.join(", ") ||
          "",

        responsibilities:
          initialData.responsibilities?.join(
            ", "
          ) || "",

        tags:
          initialData.tags?.join(", ") || "",

        applyDeadline:
          initialData.applyDeadline?.split(
            "T"
          )[0] || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
      files,
    } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">

        <div className="col-md-6 mb-3">
          <label>Title</label>
          <input
            className="form-control"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Category</label>
          <input
            className="form-control"
            name="category"
            value={form.category}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Company</label>
          <input
            className="form-control"
            name="company"
            value={form.company}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Location</label>
          <input
            className="form-control"
            name="location"
            value={form.location}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Job Type</label>

          <select
            className="form-control"
            name="jobType"
            value={form.jobType}
            onChange={handleChange}
          >
            <option>
              Full Time
            </option>

            <option>
              Part Time
            </option>

            <option>
              Remote
            </option>

            <option>
              Internship
            </option>
          </select>
        </div>

        <div className="col-md-6 mb-3">
          <label>Salary</label>

          <input
            className="form-control"
            name="salary"
            value={form.salary}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Vacancy</label>

          <input
            className="form-control"
            name="vacancy"
            value={form.vacancy}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Website</label>

          <input
            className="form-control"
            name="website"
            value={form.website}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-12 mb-3">
          <label>Short Description</label>

          <textarea
            rows="3"
            className="form-control"
            name="shortDescription"
            value={form.shortDescription}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-12 mb-3">
          <label>Description</label>

          <textarea
            rows="5"
            className="form-control"
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-12 mb-3">
          <label>Requirements</label>

          <textarea
            rows="3"
            className="form-control"
            name="requirements"
            value={form.requirements}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-12 mb-3">
          <label>Responsibilities</label>

          <textarea
            rows="3"
            className="form-control"
            name="responsibilities"
            value={form.responsibilities}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-12 mb-3">
          <label>Tags</label>

          <input
            className="form-control"
            name="tags"
            value={form.tags}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Featured Image</label>

          <input
            type="file"
            className="form-control"
            name="featuredImage"
            onChange={handleChange}
          />
        </div>

        <div className="col-md-3 mb-3">
          <label>Status</label>

          <select
            className="form-control"
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option value="active">
              Active
            </option>

            <option value="inactive">
              Inactive
            </option>
          </select>
        </div>

        <div className="col-md-3 mb-3 mt-4">
          <input
            type="checkbox"
            name="isFeatured"
            checked={form.isFeatured}
            onChange={handleChange}
          />

          Featured
        </div>

        <div className="col-12">
          <button className="btn btn-dark">
            Save Career
          </button>
        </div>
      </div>
    </form>
  );
};

export default CareerForm;