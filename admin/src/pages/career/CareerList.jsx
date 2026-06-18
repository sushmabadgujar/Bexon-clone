import React, { useEffect, useState } from "react";
// import {
//   getCareers,
//   deleteCareer,
// } from "../../services/careerService";
// import { getCareers, deleteCareer} from "../../../../server/controllers/careerController";
import { getCareers ,deleteCareer } from "../../services/careerService";
import { Link } from "react-router-dom";
import { showError, showSuccess } from "../../utils/toast";

const CareerList = () => {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    loadCareers();
  }, []);

  const loadCareers = async () => {
    try {
      const res = await getCareers();

      setCareers(res.data.careers || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete Career?")) return;

    try {
      await deleteCareer(id);

      loadCareers();
      showSuccess("Deleted Sucessfully");
    } catch (error) {
     showError(error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h3>Career List</h3>

        <Link
          to="/career"
          className="btn btn-dark"
        >
          Add Career
        </Link>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Job Type</th>
            <th>Vacancy</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {careers.map((career) => (
            <tr key={career._id}>
              <td>
                {career.featuredImage && (
                  <img
                    src={`http://localhost:5000${career.featuredImage}`}
                    alt=""
                    width="60"
                  />
                )}
              </td>

              <td>{career.title}</td>
              <td>{career.company}</td>
              <td>{career.location}</td>
              <td>{career.jobType}</td>
              <td>{career.vacancy}</td>
              <td>{career.status}</td>

              <td>
                <Link
                  to={`/career/edit/${career._id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    handleDelete(career._id)
                  }
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

export default CareerList;