import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
 Pie,
  Cell,
 LineChart,
  Line,
  CartesianGrid,
} from "recharts";

const VendorDashboard = () => {

  const [products, setProducts] = useState([]);

  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  // ANALYTICS DATA

  const salesData = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 4500 },
    { month: "May", sales: 6000 },
  ];

  const categoryData = [
    { name: "Electronics", value: 40 },
    { name: "Accessories", value: 30 },
    { name: "Appliances", value: 30 },
  ];

  const COLORS = ["#9ec5fe", "#a3cfbb", "#ffe69c"];

  // HANDLE INPUT

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  // ADD PRODUCT

  const addProduct = () => {

    if (
      !form.title ||
      !form.price ||
      !form.category
    ) {
      alert("Please fill all fields");
      return;
    }

    setProducts([
      ...products,
      {
        ...form,
        id: Date.now(),
      },
    ]);

    setForm({
      title: "",
      price: "",
      category: "",
      description: "",
      image: "",
    });

    alert("Product Uploaded Successfully");

  };

  // LOGOUT

  const handleLogout = () => {

    alert("Logout Successful");

    window.location.href = "/login";

  };

  return (

    <>
      <Navbar />

      <div className="container-fluid bg-light">

        <div className="row">

          {/* SIDEBAR */}

          <div
            className="col-lg-2 col-md-3 bg-dark text-white p-3"
            style={{ minHeight: "100vh" }}
          >

            <h5 className="mb-4 fw-bold text-warning">
              Vendor Panel
            </h5>

            <ul className="list-unstyled small">

              <li className="mb-4">
                <a
                  href="#dashboard"
                  className="text-white text-decoration-none"
                >
                  🏠 Dashboard
                </a>
              </li>

              <li className="mb-4">
                <a
                  href="#profile"
                  className="text-white text-decoration-none"
                >
                  👤 Profile
                </a>
              </li>

              <li className="mb-4">
                <a
                  href="#products"
                  className="text-white text-decoration-none"
                >
                  📦 Products
                </a>
              </li>

              <li className="mb-4">
                <a
                  href="#upload"
                  className="text-white text-decoration-none"
                >
                  ➕ Upload Product
                </a>
              </li>

              <li className="mb-4">
                <a
                  href="#settings"
                  className="text-white text-decoration-none"
                >
                  ⚙ Settings
                </a>
              </li>

            </ul>

          </div>

          {/* MAIN CONTENT */}

          <div
            id="dashboard"
            className="col-lg-10 col-md-9 p-3 p-md-4"
          >

            {/* TOP */}

            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">

              <div>

                <h4 className="fw-bold">
                  Vendor Dashboard
                </h4>

                <p className="text-muted">
                  Manage your products and analytics
                </p>

              </div>

              <button
                className="btn btn-dark"
                onClick={handleLogout}
              >
                Logout
              </button>

            </div>

            {/* STATS */}

            <div className="row g-4 mb-4">

              <div className="col-sm-6 col-lg-4">

                <div className="card shadow-sm border-0 p-4 text-center bg-white">

                  <h6 className="text-muted">
                    Total Products
                  </h6>

                  <h4 className="text-primary">
                    {products.length}
                  </h4>

                </div>

              </div>

              <div className="col-sm-6 col-lg-4">

                <div className="card shadow-sm border-0 p-4 text-center bg-white">

                  <h6 className="text-muted">
                    Total Orders
                  </h6>

                  <h4 className="text-success">
                    120
                  </h4>

                </div>

              </div>

              <div className="col-sm-6 col-lg-4">

                <div className="card shadow-sm border-0 p-4 text-center bg-white">

                  <h6 className="text-muted">
                    Total Earnings
                  </h6>

                  <h4 className="text-warning">
                    ₹50,000
                  </h4>

                </div>

              </div>

            </div>

            {/* ANALYTICS */}

            <div className="row g-3 mb-4">

              {/* BAR CHART */}

              <div className="col-12 col-lg-7">

                <div className="card border-0 shadow-sm p-3">

                  <h6 className="fw-bold mb-3 text-secondary">
                    Monthly Sales
                  </h6>

                  <ResponsiveContainer width="100%" height={220}>

                    <BarChart data={salesData}>

                      <CartesianGrid strokeDasharray="2 2" />

                      <XAxis dataKey="month" />

                      <YAxis />

                      <Tooltip />

                      <Bar
                        dataKey="sales"
                        fill="#6ea8fe"
                        radius={[6, 6, 0, 0]}
                      />

                    </BarChart>

                  </ResponsiveContainer>

                </div>

              </div>

              {/* PIE CHART */}

              <div className="col-12 col-lg-5">

                <div className="card border-0 shadow-sm p-3 text-center">

                  <h6 className="fw-bold mb-3 text-secondary">
                    Product Categories
                  </h6>

                  <ResponsiveContainer width="100%" height={220}>

                    <PieChart>

                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        outerRadius={70}
                        dataKey="value"
                        label
                      >

                        {categoryData.map((entry, index) => (

                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index]}
                          />

                        ))}

                      </Pie>

                      <Tooltip />

                    </PieChart>

                  </ResponsiveContainer>

                </div>

              </div>

            </div>

            {/* LINE CHART */}

            <div className="card border-0 shadow-sm p-3 mb-4">

              <h6 className="fw-bold mb-3 text-secondary">
                Revenue Overview
              </h6>

              <ResponsiveContainer width="100%" height={220}>

                <LineChart data={salesData}>

                  <CartesianGrid strokeDasharray="2 2" />

                  <XAxis dataKey="month" />

                  <YAxis />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#74c69d"
                    strokeWidth={3}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

            {/* PROFILE */}

            <div
              id="profile"
              className="card shadow-sm border-0 p-4 mb-4"
            >

              <h5 className="fw-bold mb-3">
                Vendor Profile
              </h5>

              <div className="row">

                <div className="col-12 col-md-6">

                  <p>
                    <strong>Name:</strong> Demo Vendor
                  </p>

                  <p>
                    <strong>Email:</strong> vendor@gmail.com
                  </p>

                </div>

                <div className="col-12 col-md-6">

                  <p>
                    <strong>Phone:</strong> 9876543210
                  </p>

                  <p>
                    <strong>Location:</strong> Pune, India
                  </p>

                </div>

              </div>

            </div>

            {/* PRODUCT UPLOAD */}

            <div
              id="upload"
              className="card shadow-sm border-0 p-4 mb-5"
            >

              <h5 className="fw-bold mb-4">
                Upload Product
              </h5>

              <div className="row">

                <div className="col-12 col-md-6 mb-3">

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Product Title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                  />

                </div>

                <div className="col-12 col-md-6 mb-3">

                  <input
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                  />

                </div>

                <div className="col-12 col-md-6 mb-3">

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Category"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                  />

                </div>

                <div className="col-12 col-md-6 mb-3">

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Image URL"
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                  />

                </div>

                <div className="col-12 mb-3">

                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                  />

                </div>

                <div className="col-12">

                  <button
                    className="btn btn-dark w-100 py-2"
                    onClick={addProduct}
                  >
                    Upload Product
                  </button>

                </div>

              </div>

            </div>

            {/* PRODUCTS */}

            <div id="products">

              <h5 className="fw-bold mb-4">
                Uploaded Products
              </h5>

              <div className="row g-4">

                {products.map((p) => (

                  <div
                    className="col-sm-6 col-lg-4"
                    key={p.id}
                  >

                    <div className="card shadow-sm border-0 h-100">

                      <img
                        src={
                          p.image ||
                          "https://via.placeholder.com/300"
                        }
                        alt={p.title}
                        className="card-img-top"
                        style={{
                          height: "180px",
                          objectFit: "cover",
                        }}
                      />

                      <div className="card-body">

                        <h6 className="fw-bold">
                          {p.title}
                        </h6>

                        <p className="text-muted">
                          {p.description}
                        </p>

                        <span className="badge bg-primary">
                          {p.category}
                        </span>

                        <h6 className="mt-3 text-success">
                          ₹ {p.price}
                        </h6>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* SETTINGS */}

            <div
              id="settings"
              className="card shadow-sm border-0 p-4 mt-5"
            >

              <h5 className="fw-bold mb-3">
                Settings
              </h5>

              <p className="text-muted">
                Vendor settings options will appear here.
              </p>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default VendorDashboard;