import React from "react";

import {
  FiHome,
  FiBarChart2,
  FiShoppingCart,
  FiUsers,
  FiFileText,
  FiMail,
  FiMessageCircle,
  FiFolder,
  FiDollarSign,
  FiEye,
  FiBell,
  FiSearch,
} from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="zn-db-wrapper">

      {/* Main Content */}
      <main className="zn-db-main-content">
        {/* Topbar */}
         
        {/* Page Title */}
        <div className="mb-4">
          <h1 className="zn-db-page-title">Dashboard</h1>

          <p className="zn-db-page-subtitle">
            Welcome back, Aigars. Here's what's happening with your business
            today.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="row">
          <div className="col-xl-3 col-lg-6 col-md-6 mb-4">
            <div className="zn-db-stat-card">
              <div className="zn-db-stat-top">
                <div>
                  <p>Total Revenue</p>

                  <h2>$48,295</h2>
                </div>

                <div className="zn-db-stat-icon zn-db-orange">
                  <FiDollarSign />
                </div>
              </div>

              <span className="zn-db-growth zn-db-positive">
                +12.5% vs last month
              </span>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6 col-md-6 mb-4">
            <div className="zn-db-stat-card">
              <div className="zn-db-stat-top">
                <div>
                  <p>Active Users</p>

                  <h2>2,847</h2>
                </div>

                <div className="zn-db-stat-icon zn-db-green">
                  <FiUsers />
                </div>
              </div>

              <span className="zn-db-growth zn-db-positive">
                +8.2% vs last month
              </span>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6 col-md-6 mb-4">
            <div className="zn-db-stat-card">
              <div className="zn-db-stat-top">
                <div>
                  <p>Total Orders</p>

                  <h2>1,432</h2>
                </div>

                <div className="zn-db-stat-icon zn-db-blue">
                  <FiShoppingCart />
                </div>
              </div>

              <span className="zn-db-growth zn-db-negative">
                -3.1% vs last month
              </span>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6 col-md-6 mb-4">
            <div className="zn-db-stat-card">
              <div className="zn-db-stat-top">
                <div>
                  <p>Page Views</p>

                  <h2>284K</h2>
                </div>

                <div className="zn-db-stat-icon zn-db-yellow">
                  <FiEye />
                </div>
              </div>

              <span className="zn-db-growth zn-db-positive">
                +24.7% vs last month
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="row g-4 mt-1">
          {/* Chart */}
          <div className="col-lg-8">
            <div className="zn-db-chart-card">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h4>Overview</h4>

                  <p>Monthly performance for the current year</p>
                </div>

                <div className="zn-db-chart-tabs">
                  <button className="active">Revenue</button>
                  <button>Orders</button>
                  <button>Profit</button>
                </div>
              </div>

              <div className="zn-db-chart-placeholder">
                <div className="zn-db-chart-line"></div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-4">
            <div className="zn-db-side-card mb-4">
              <h4>Traffic Sources</h4>

              <div className="zn-db-traffic-circle">
                <div className="zn-db-traffic-inner">
                  <h2>284K</h2>

                  <p>Visits</p>
                </div>
              </div>

              <div className="zn-db-traffic-list">
                <div>
                  <span className="zn-db-dot zn-db-orange-bg"></span>
                  Direct
                </div>

                <strong>35%</strong>
              </div>

              <div className="zn-db-traffic-list">
                <div>
                  <span className="zn-db-dot zn-db-green-bg"></span>
                  Organic
                </div>

                <strong>28%</strong>
              </div>

              <div className="zn-db-traffic-list">
                <div>
                  <span className="zn-db-dot zn-db-blue-bg"></span>
                  Referral
                </div>

                <strong>22%</strong>
              </div>

              <div className="zn-db-traffic-list">
                <div>
                  <span className="zn-db-dot zn-db-yellow-bg"></span>
                  Social
                </div>

                <strong>15%</strong>
              </div>
            </div>

            <div className="zn-db-side-card">
              <h4>Monthly Goals</h4>

              <div className="zn-db-goal-row">
                <span>Monthly Revenue</span>

                <span>88%</span>
              </div>

              <div className="zn-db-progress">
                <div className="zn-db-progress-fill"></div>
              </div>

              <div className="d-flex justify-content-between mt-2">
                <small>48,295</small>

                <small>Target: 55,000</small>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
