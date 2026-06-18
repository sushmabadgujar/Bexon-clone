import React, { useEffect, useState } from "react";
import PricingPlanForm from "../../components/PricePlan/PricePlanForm";
import { getPricingPlanById,updatePricingPlan } from "../../services/priceplanService";
import { useNavigate, useParams } from "react-router-dom";
import { showSuccess } from "../../utils/toast";

const PricingPlanEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getPricingPlanById(id);
      setPlan(res.data.pricingPlan);
    };
    fetchData();
  }, [id]);

  const handleUpdate = async (data) => {
    await updatePricingPlan(id, data);
    showSuccess("Updated successfully!");
    navigate("/price-plan-list");
  };

  if (!plan) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h3>Edit Pricing Plan</h3>
      <PricingPlanForm initialData={plan} onSubmit={handleUpdate} />
    </div>
  );
};

export default PricingPlanEdit;