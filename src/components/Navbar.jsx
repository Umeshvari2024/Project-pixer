import React from 'react';
import { Link } from 'react-router-dom';

import shopLogo from '../assets/Shop Logo.jpg';

const Navbar = () => {

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">

      <div className="container-fluid px-3">

        {/* LOGO */}

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

          <span className="text-white fw-bold fs-4">
            Pixer Marketplace
          </span>

        </Link>

        {/* MOBILE BUTTON */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >

          <span className="navbar-toggler-icon"></span>

        </button>

        {/* NAVBAR LINKS */}

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          <ul className="navbar-nav ms-auto align-items-center gap-lg-3">

            {/* HOME */}

            <li className="nav-item">

              <Link
                className="nav-link text-white fw-medium px-3"
                to="/"
              >
                Home
              </Link>

            </li>

            {/* PRODUCTS */}

            <li className="nav-item">

              <a
                className="nav-link text-white fw-medium px-3"
                href="/#products"
              >
                Products
              </a>

            </li>

            {/* CART */}

            <li className="nav-item">

              <Link
                className="nav-link text-white fw-medium px-3"
                to="/cart"
              >
                🛒 Cart
              </Link>

            </li>

            {/* USER DASHBOARD */}

            <li className="nav-item">

              <Link
                className="nav-link text-white fw-medium px-3"
                to="/dashboard"
              >
                Dashboard
              </Link>

            </li>

            {/* VENDOR DASHBOARD */}

            <li className="nav-item">

              <Link
                className="nav-link text-white fw-medium px-3"
                to="/vendor-dashboard"
              >
                Vendor Dashboard
              </Link>

            </li>

            {/* LOGIN */}

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