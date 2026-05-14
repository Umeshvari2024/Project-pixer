import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {

  return (

    <div className="bg-light">

      <Navbar />

      <div className="container-fluid">

        <div className="row">

          {/* SIDEBAR */}

          <div className="col-lg-2 bg-dark text-white min-vh-100 p-3">

            <h4 className="mb-4">
              User Dashboard
            </h4>

            <ul className="nav flex-column gap-3">

              <li className="nav-item">

                <a
                  href="#home"
                  className="text-white text-decoration-none"
                >
                  🏠 Home
                </a>

              </li>

              <li className="nav-item">

                <a
                  href="#orders"
                  className="text-white text-decoration-none"
                >
                  📦 Orders
                </a>

              </li>

              <li className="nav-item">

                <a
                  href="#products"
                  className="text-white text-decoration-none"
                >
                  🛒 Products
                </a>

              </li>

              <li className="nav-item">

                <a
                  href="#payments"
                  className="text-white text-decoration-none"
                >
                  💳 Payments
                </a>

              </li>

              <li className="nav-item">

                <a
                  href="#settings"
                  className="text-white text-decoration-none"
                >
                  ⚙️ Settings
                </a>

              </li>

            </ul>

          </div>

          {/* MAIN CONTENT */}

          <div
            className="col-lg-10 p-4"
            id="home"
          >

            {/* STATS CARDS */}

            <div className="row g-4 mb-4">

              <div className="col-md-4">

                <div className="card shadow p-3 text-center">

                  <h5>Total Orders</h5>

                  <h2>120</h2>

                </div>

              </div>

              <div className="col-md-4">

                <div className="card shadow p-3 text-center">

                  <h5>Total Revenue</h5>

                  <h2>₹2,50,000</h2>

                </div>

              </div>

              <div className="col-md-4">

                <div className="card shadow p-3 text-center">

                  <h5>Customers</h5>

                  <h2>350</h2>

                </div>

              </div>

            </div>

            {/* ORDERS */}

            <div
              className="card shadow p-3 mb-4"
              id="orders"
            >

              <h5 className="mb-3">
                Recent Orders
              </h5>

              <table className="table table-striped">

                <thead>

                  <tr>

                    <th>ID</th>

                    <th>Product</th>

                    <th>Status</th>

                    <th>Price</th>

                  </tr>

                </thead>

                <tbody>

                  <tr>

                    <td>1</td>

                    <td>Laptop</td>

                    <td>
                      <span className="badge bg-success">
                        Delivered
                      </span>
                    </td>

                    <td>₹89,999</td>

                  </tr>

                  <tr>

                    <td>2</td>

                    <td>Smart Watch</td>

                    <td>
                      <span className="badge bg-warning">
                        Pending
                      </span>
                    </td>

                    <td>₹5,999</td>

                  </tr>

                  <tr>

                    <td>3</td>

                    <td>Air Conditioner</td>

                    <td>
                      <span className="badge bg-primary">
                        Shipped
                      </span>
                    </td>

                    <td>₹35,000</td>

                  </tr>

                </tbody>

              </table>

            </div>

            {/* PRODUCTS */}

            <div
              id="products"
              className="card shadow p-3 mb-4"
            >

              <h5 className="mb-3">
                Products
              </h5>

              <div className="row">

                <div className="col-md-4 mb-3">

                  <div className="card p-3 text-center">

                    <h6>Laptop</h6>

                    <p>₹89,999</p>

                  </div>

                </div>

                <div className="col-md-4 mb-3">

                  <div className="card p-3 text-center">

                    <h6>Smart Watch</h6>

                    <p>₹5,999</p>

                  </div>

                </div>

                <div className="col-md-4 mb-3">

                  <div className="card p-3 text-center">

                    <h6>Air Conditioner</h6>

                    <p>₹35,000</p>

                  </div>

                </div>

              </div>

            </div>

            {/* PAYMENTS */}

            <div
              id="payments"
              className="card shadow p-3 mb-4"
            >

              <h5 className="mb-3">
                Payments
              </h5>

              <p>
                Total Payments Received: ₹2,50,000
              </p>

            </div>

            {/* SETTINGS */}

            <div
              id="settings"
              className="card shadow p-3"
            >

              <h5 className="mb-3">
                Settings
              </h5>

              <p className="text-muted">
                User settings options will appear here.
              </p>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>

  );

};

export default Dashboard;