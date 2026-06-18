import React, { useEffect, useState } from "react";
import { getPricingPlans,deletePricingPlan } from "../../services/priceplanService";
import { useNavigate } from "react-router-dom";

const PricingPlanList = () => {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();

  const loadPlans = async () => {
    const res = await getPricingPlans();
    setPlans(res.data.pricingPlans || []);
  };

  useEffect(() => {
    loadPlans();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this plan?")) {
      await deletePricingPlan(id);
      loadPlans();
    }
  };

  return (
    <div className="container mt-4">
      <button
        className="btn btn-dark mb-3"
        onClick={() => navigate("/price-plan")}
      >
        Add Plan
      </button>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Cycle</th>
            <th>Status</th>
            <th>Featured</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {plans.map((plan) => (
            <tr key={plan._id}>
              <td>{plan.title}</td>
              <td>₹{plan.price}</td>
              <td>{plan.billingCycle}</td>
              <td>{plan.status}</td>
              <td>{plan.isFeatured ? "Yes" : "No"}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => navigate(`/pricing-plan/edit/${plan._id}`)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(plan._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingPlanList;