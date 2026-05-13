import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// नवीन पेजेस इम्पोर्ट करा
import Login from './pages/Login';
import Register from './pages/Register';

// इमेज इम्पोर्ट
import heroImg from './assets/hero.png'; 

// होमपेज कंपोनंट
const Home = () => (
  <header className="py-5 bg-white border-bottom shadow-sm">
    <div className="container px-5">
      <div className="row gx-5 align-items-center justify-content-center">
        <div className="col-lg-8 col-xl-7 col-xxl-6 text-center text-xl-start">
          <h1 className="display-5 fw-bolder text-dark mb-2">
            Marketplace for Digital Products
          </h1>
          <p className="lead fw-normal text-muted mb-4">
            Explore templates, source codes, and digital assets. Built for developers and creators.
          </p>
          <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
            <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#products">Browse Items</a>
            <a className="btn btn-outline-dark btn-lg px-4" href="#learn">Learn More</a>
          </div>
        </div>
        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
          <img 
            className="img-fluid rounded-3 my-5 shadow" 
            src={heroImg} 
            alt="Pixer Hero" 
            onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Pixer+Digital+Marketplace" }}
          />
        </div>
      </div>
    </div>
  </header>
);

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      {/* १. नॅव्हिगेशन बार */}
      <Navbar />

      {/* २. मुख्य आशय - इथे Routes डिफाईन केले आहेत */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      {/* ३. फुटर */}
      <Footer />
    </div>
  );
}

export default App;