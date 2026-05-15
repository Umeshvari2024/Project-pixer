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

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const addProduct = () => {

    if (!form.title || !form.price || !form.category) {
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

  const handleLogout = () => {

    alert("Logout Successful");

    window.location.href = "/login";

  };

  return (

    <>
      <Navbar />

      <div className="container-fluid bg-light">

        <div className="row">

          <div
            className="col-lg-2 col-md-3 bg-dark text-white p-3"
            style={{ minHeight: "100vh" }}
          >

            <h5 className="mb-4 fw-bold text-warning">
              Vendor Panel
            </h5>

            <ul className="list-unstyled small">

              <li className="mb-4">
                <a href="#dashboard" className="text-white text-decoration-none">
                  🏠 Dashboard
                </a>
              </li>

              <li className="mb-4">
                <a href="#products" className="text-white text-decoration-none">
                  📦 Products
                </a>
              </li>

              <li className="mb-4">
                <a href="#upload" className="text-white text-decoration-none">
                  ➕ Upload Product
                </a>
              </li>

            </ul>

          </div>

          <div className="col-lg-10 col-md-9 p-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

              <div>
                <h4 className="fw-bold">Vendor Dashboard</h4>

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

              <div className="col-md-4">

                <div className="card p-4 shadow border-0 text-center">

                  <h6>Total Products</h6>

                  <h3 className="text-primary">
                    {products.length}
                  </h3>

                </div>

              </div>

              <div className="col-md-4">

                <div className="card p-4 shadow border-0 text-center">

                  <h6>Total Orders</h6>

                  <h3 className="text-success">120</h3>

                </div>

              </div>

              <div className="col-md-4">

                <div className="card p-4 shadow border-0 text-center">

                  <h6>Total Earnings</h6>

                  <h3 className="text-warning">₹50,000</h3>

                </div>

              </div>

            </div>

            {/* CHARTS */}

            <div className="row g-4 mb-4">

              <div className="col-lg-7">

                <div className="card p-3 border-0 shadow-sm">

                  <h6 className="fw-bold mb-3">
                    Monthly Sales
                  </h6>

                  <ResponsiveContainer width="100%" height={250}>

                    <BarChart data={salesData}>

                      <CartesianGrid strokeDasharray="3 3" />

                      <XAxis dataKey="month" />

                      <YAxis />

                      <Tooltip />

                      <Bar
                        dataKey="sales"
                        fill="#6ea8fe"
                      />

                    </BarChart>

                  </ResponsiveContainer>

                </div>

              </div>

              <div className="col-lg-5">

                <div className="card p-3 border-0 shadow-sm">

                  <h6 className="fw-bold mb-3">
                    Categories
                  </h6>

                  <ResponsiveContainer width="100%" height={250}>

                    <PieChart>

                      <Pie
                        data={categoryData}
                        dataKey="value"
                        outerRadius={80}
                        label
                      >

                        {categoryData.map((entry, index) => (

                          <Cell
                            key={index}
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

            {/* REVENUE */}

            <div className="card p-3 shadow-sm border-0 mb-4">

              <h6 className="fw-bold mb-3">
                Revenue Overview
              </h6>

              <ResponsiveContainer width="100%" height={250}>

                <LineChart data={salesData}>

                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="month" />

                  <YAxis />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#198754"
                    strokeWidth={3}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

            {/* PRODUCT FORM */}

            <div
              id="upload"
              className="card p-4 shadow-sm border-0 mb-5"
            >

              <h5 className="fw-bold mb-4">
                Upload Product
              </h5>

              <div className="row">

                <div className="col-md-6 mb-3">

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Product Title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                  />

                </div>

                <div className="col-md-6 mb-3">

                  <input
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                  />

                </div>

                <div className="col-md-6 mb-3">

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Category"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                  />

                </div>

                <div className="col-md-6 mb-3">

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
                    className="btn btn-dark w-100"
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
                    key={p.id}
                    className="col-md-4"
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

                        <h5 className="mt-3 text-success">
                          ₹ {p.price}
                        </h5>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default VendorDashboard;