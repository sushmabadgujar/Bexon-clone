import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteService,getServices } from "../../services/serviceService";
import { showSuccess, showError } from "../../utils/toast";
const ServiceList = () => {
    const navigate = useNavigate();

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchAllServices();
    }, []);

    const fetchAllServices = async () => {
        try {
            setLoading(true);
            const res = await getServices();
            console.log("res", res);
            setServices(res.data.data);

        } catch (error) {
            console.log("Error:", error);
        } finally {
            setLoading(false);
        }
    };


const handleDelete = async (id) => {
  if (!window.confirm("Delete this service?")) return;

  try {
    await deleteService(id);

    setServices((prev) =>
      prev.filter((service) => service._id !== id)
    );

    showSuccess("Service deleted successfully");
  } catch (error) {
    showError("Failed to delete service");
  }
};
    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Services</h3>

                <button
                    className="btn btn-primary"
                    onClick={() => navigate("/services/create")}
                >
                    + Add Service
                </button>
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="row">
                    {services.map((service) => (
                        <div className="col-md-4 mb-3" key={service._id}>
                            <div className="card shadow-sm p-3">
                                <h5>{service.title}</h5>
                                <p>{service.description}</p>

                                <div className="d-flex gap-2">

                                    <button
                                        className="btn btn-sm btn-warning"
                                        onClick={() =>
                                            navigate(`/services/${service._id}`)
                                        }
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() =>
                                            handleDelete(service._id)}
                                    >
                                        Delete
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ServiceList;