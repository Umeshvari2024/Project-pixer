import React from 'react';
import { Link } from 'react-router-dom'; // हे इम्पोर्ट करणे महत्त्वाचे आहे

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        {/* Link टॅग वापरल्यामुळे पेज रिफ्रेश न होता लोड होईल */}
        <Link className="navbar-brand fw-bold" to="/">PIXER</Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">Products</a>
            </li>
            <li className="nav-item">
              {/* Login बटणाला /login पाथशी जोडले */}
              <Link to="/login" className="btn btn-primary ms-lg-3">Login</Link>
            </li>
            <li className="nav-item">
              {/* Register साठी पण लिंक जोडूया */}
              <Link to="/register" className="nav-link ms-lg-2">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;