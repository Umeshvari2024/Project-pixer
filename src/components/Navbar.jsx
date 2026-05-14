import React from 'react';
import { Link } from 'react-router-dom';

import shopLogo from '../assets/Shop Logo.jpg';

const Navbar = () => {

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">

     <div className="container-fluid px-3">

        {/* Logo */}
        <Link
          className="navbar-brand d-flex align-items-center gap-3"
          to="/"
        >

          <img
            src={shopLogo}
            alt="Shop Logo"
            height="60"
            width="60"
            className="rounded-circle shadow-sm"
            style={{
              objectFit: 'cover',
            }}
          />

          <span className="text-white fw-bold fs-3">
            Pixer Marketplace
          </span>

        </Link>

        {/* Mobile Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >

          <span className="navbar-toggler-icon"></span>

        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto align-items-center gap-lg-3">

            <li className="nav-item">

              <Link
                className="nav-link text-white fw-medium px-3"
                to="/"
              >
                Home
              </Link>

            </li>

            <li className="nav-item">

              <a
                className="nav-link text-white fw-medium px-3"
                href="#products"
              >
                Products
              </a>

            </li>

            <li className="nav-item">

              <Link
                className="nav-link text-white fw-medium px-3"
                to="/cart"
              >
                Cart
              </Link>

            </li>

            <li className="nav-item">

              <Link
                to="/login"
                className="btn btn-outline-light px-4 rounded-pill shadow-sm ms-lg-3"
              >
                Login
              </Link>

            </li>

          </ul>

        </div>

      </div>

    </nav>

  );
};

export default Navbar;