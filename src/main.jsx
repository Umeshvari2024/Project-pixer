import React from 'react';
import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Pages
import App from './App.jsx';

import Login from './pages/Login.jsx';

import Register from './pages/Register.jsx';

createRoot(document.getElementById('root')).render(

  <StrictMode>

    <BrowserRouter>

      <Routes>

        {/* Home Page */}
        <Route path="/" element={<App />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Register Page */}
        <Route path="/register" element={<Register />} />

      </Routes>

    </BrowserRouter>

  </StrictMode>

);