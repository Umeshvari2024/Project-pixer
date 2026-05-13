import React from 'react';
import heroImg from '../assets/hero.png'; // तुमच्या इमेजचा पाथ तपासा

const Home = () => {
  return (
    <>
      {/* Hero Section */}
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

      {/* Featured Products Section (तुमच्या स्क्रीनशॉट प्रमाणे) */}
      <section id="products" className="py-5 bg-light">
        <div className="container px-5 my-5">
          <div className="text-center mb-5">
            <h2 className="fw-bolder">Featured Products</h2>
            <p className="lead fw-normal text-muted mb-0">Our latest digital assets</p>
          </div>
          <div className="row gx-5 justify-content-center">
            {/* Product Card 1 */}
            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0 rounded-4">
                <img className="card-img-top" src="https://via.placeholder.com/600x350" alt="..." />
                <div className="card-body p-4 text-center">
                  <h5 className="card-title mb-3 fw-bold">Premium Template</h5>
                  <p className="card-text mb-0 text-muted small">High-quality digital asset for your next big project.</p>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <button className="btn btn-dark w-100 fw-bold">Buy Now</button>
                </div>
              </div>
            </div>
            {/* अधिक कार्ड्स तुम्ही इथे ॲड करू शकता */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;