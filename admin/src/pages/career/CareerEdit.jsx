import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CareerForm from "../../components/career/CareerForm";
import {
    getCareerById,
    updateCareer,
} from "../../services/careerService";
import { showSuccess } from "../../utils/toast";

const CareerEdit = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const [career, setCareer] = useState(null);

    useEffect(() => {
        fetchCareer();
    }, []);

    const fetchCareer = async () => {
        try {
            const res = await getCareerById(id);

            setCareer(res.data.career);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (formData) => {
        try {
            await updateCareer(id, formData);

            showSuccess("Career Updated Successfully");
            navigate("/career-list");
        } catch (error) {
            showSuccess(error);
        }
    };

    return (
        <div className="container mt-4">
            
            <CareerForm
                initialData={career}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default CareerEdit;