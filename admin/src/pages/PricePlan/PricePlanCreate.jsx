import React from "react";
// import PricingPlanForm from "./PricingPlanForm";
import PricingPlanForm from "../../components/PricePlan/PricePlanForm";
// import { createPricingPlan } from "../../services/pricingPlanService";
import { createPricingPlan } from "../../services/priceplanService";
import { useNavigate } from "react-router-dom";
import { showSuccess,showError } from "../../utils/toast";
const PricingPlanCreate = () => {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    await createPricingPlan(data);
    showSuccess("Pricing plan created successfully!");
    navigate("/price-plan-list");
  };

  return (
    <div className="container mt-4">
      <PricingPlanForm onSubmit={handleCreate} />
    </div>
  );
};

export default PricingPlanCreate;