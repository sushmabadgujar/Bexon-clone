import { useEffect, useState } from "react";
import { getAllPortfolios, deletePortfolio } from "../../services/portfolioService";
import { useNavigate } from "react-router-dom";


const PortfolioList = () => {
  const navigate = useNavigate();
  const [portfolios, setPortfolios] = useState([]);

  const fetchPortfolios = async () => {
    try {
      const res = await getAllPortfolios();
      setPortfolios(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePortfolio(id);
      fetchPortfolios();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {portfolios.map((item) => (
          <div className="col-md-4 mb-4" key={item._id}>
            <div className="card shadow-sm h-100">

              <div className="card-body">

                {/* Title */}
                <h5 className="mb-2">{item.title}</h5>

                {/* Short Description */}
                <p className="text-muted mb-2">
                  {item.shortDescription}
                </p>

                {/* Location + Sector */}
                <div className="mb-2">
                  <small className="d-block">
                    📍 Location: {item.location}
                  </small>
                  <small className="d-block">
                    🏢 Sector: {item.sector}
                  </small>
                </div>

                {/* Buttons */}
                <div className="d-flex gap-2 mt-3">

                  {/* Edit */}
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() =>
                      navigate(`/portfolio/edit/${item._id}`)
                    }
                  >
                    Edit
                  </button>

                  {/* Delete */}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>

                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;