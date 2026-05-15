import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AllProducts from './pages/AllProducts';
import Payment from "./pages/Payment";

import ProtectedRoute from "./components/ProtectedRoute.jsx";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Context
import { CartProvider } from './context/CartContext';

// CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Pages
import App from './App.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Cart from './pages/Cart.jsx';
import VendorDashboard from "./pages/VendorDashboard";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>

          {/* Home */}
          <Route path="/" element={<App />} />

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Register */}
          <Route path="/register" element={<Register />} />

          {/* Product Details */}
          <Route path="/product-details/:id" element={<ProductDetails />} />

          <Route path="/payment" element={<Payment />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/cart" element={<Cart />} />

          <Route
  path="/vendor-dashboard"
  element={
    <ProtectedRoute>
      <VendorDashboard />
    </ProtectedRoute>
  }
/>

          <Route
  path="/all-products"
  element={<AllProducts />}
/>

        </Routes>
      </BrowserRouter>
    </CartProvider>
  </StrictMode>
);