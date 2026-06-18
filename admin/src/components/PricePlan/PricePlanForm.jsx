import React, { useState, useEffect } from "react";

const PricingPlanForm = ({ initialData, onSubmit }) => {
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    price: "",
    billingCycle: "month",
    features: "",
    buttonText: "Choose Plan",
    isFeatured: false,
    status: "active",
    displayOrder: 0,
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        ...initialData,
        features: initialData.features?.join(", ") || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      ...form,
      price: Number(form.price),
      displayOrder: Number(form.displayOrder),
      features: form.features
        .split(",")
        .map((f) => f.trim())
        .filter(Boolean),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="row">

        <div className="col-md-6 mb-3">
          <label>Title</label>
          <input name="title" className="form-control" value={form.title || ""} onChange={handleChange} />
        </div>

        <div className="col-md-6 mb-3">
          <label>Subtitle</label>
          <input name="subtitle" className="form-control" value={form.subtitle || ""} onChange={handleChange} />
        </div>

        <div className="col-md-6 mb-3">
          <label>Price</label>
          <input type="number" name="price" className="form-control" value={form.price||""} onChange={handleChange} />
        </div>

        <div className="col-md-6 mb-3">
          <label>Billing Cycle</label>
          <select name="billingCycle" className="form-control" value={form.billingCycle || ""} onChange={handleChange}>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </div>

        <div className="col-md-12 mb-3">
          <label>Features (comma separated)</label>
          <textarea name="features" className="form-control" value={form.features || " "} onChange={handleChange} />
        </div>

        <div className="col-md-6 mb-3">
          <label>Button Text</label>
          <input name="buttonText" className="form-control" value={form.buttonText || " "} onChange={handleChange} />
        </div>

        <div className="col-md-3 mb-3">
          <label>
            <input type="checkbox" name="isFeatured" checked={form.isFeatured || " "} onChange={handleChange} />
            {" "}Featured
          </label>
        </div>

        <div className="col-md-3 mb-3">
          <label>Status</label>
          <select name="status" className="form-control" value={form.status || " "} onChange={handleChange}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <div className="col-md-6 mb-3">
          <label>Display Order</label>
          <input type="number" name="displayOrder" className="form-control" value={form.displayOrder|| " "} onChange={handleChange} />
        </div>

        <div className="col-12">
          <button className="btn btn-dark">Submit</button>
        </div>

      </div>
    </form>
  );
};

export default PricingPlanForm;