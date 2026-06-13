
// export default App
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AdminLayout from "./layout/AdminLayout";
import Team from "./pages/Team/TeamCreate.jsx";
import TeamList from "./pages/Team/TeamList.jsx";
import TeamEdit from "./pages/Team/TeamEdit.jsx";
import Service from "./pages/service/ServiceCreate.jsx";
import ServiceList from "./pages/service/ServiceList";
import ServiceEdit from "./pages/service/ServiceEdit.jsx";
import PortFolio from "./pages/Portfolio/PorfolioCreate.jsx";
import PortfolioList from "./pages/Portfolio/PorfolioList.jsx";
import PortfolioEdit from "./pages/Portfolio/PorfolioEdit.jsx";
function App() {
  return (

    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={2000} />

      <Routes>

        {/* ADMIN LAYOUT */}
        <Route path="/" element={<AdminLayout />}>

          {/* DEFAULT */}
          <Route
            index
            element={<Navigate to="/dashboard" />}
          />

          {/* DASHBOARD */}
          <Route
            path="dashboard"
            element={<Dashboard />}
          />

          {/* PROFILE */}
          <Route
            path="profile"
            element={<Profile />}
          />
          {/* PROFILE */}
          <Route
            path="edit-profile"
            element={<EditProfile />}

          />
          {/* PROFILE */}
          <Route
            path="team"
            element={<Team />}

          />
          <Route
            path="team-list"
            element={<TeamList />}

          />

          <Route
            path="service"
            element={<Service />}

          />

          <Route
            path="service-list"
            element={<ServiceList />}

          />
          <Route
            path="/services/:id"
            element={<ServiceEdit />}

          />
          <Route path="/edit/:id" element={<TeamEdit />} />
          <Route path = "portfolio" element={<PortFolio/>}/>
          <Route path = "portfolio-list" element={<PortfolioList/>}/>

          <Route path = "/portfolio/edit/:id" element={<PortfolioEdit/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;