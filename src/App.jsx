// App.jsx

import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Images
import heroImg from './assets/Shop Logo.jpg';
import tvImg from './assets/tv.jpg';
import acImg from './assets/air-condition.jpg';
import watchImg from './assets/watch_.jpg';

const App = () => {

  // Buy Now Button Function
  const handleBuyNow = (productName) => {
    alert(`${productName} added successfully!`);
  };

  // Products Data
  const products = [

    {
      id: 1,
      title: "Smart LED TV",
      description:
        "Ultra HD display with smart connectivity and immersive sound.",
      image: tvImg,
    },

    {
      id: 2,
      title: "Luxury Smart Watch",
      description:
        "Fitness tracking, heart rate monitor and smart notifications.",
      image: watchImg,
    },

    {
      id: 3,
      title: "Air Conditioner",
      description:
        "Energy efficient cooling with silent operation technology.",
      image: acImg,
    },

  ];

  return (

    <div className="bg-light">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>

        {/* Full Screen Container */}
        <div className="container-fluid px-5">

          {/* Hero Section */}
          <section className="row align-items-center min-vh-100">

            {/* Left Side */}
            <div className="col-lg-6">

              <h1
                className="fw-bold text-dark mb-4"
                style={{
                  fontSize: '3rem',
                }}
              >
                Welcome to Pixer Marketplace
              </h1>

              <p
                className="text-secondary mb-4"
                style={{
                  fontSize: '1rem',
                }}
              >
                Discover amazing products with modern UI and smooth shopping
                experience.
              </p>

              <a
                href="#products"
                className="btn btn-dark btn-lg px-5 py-3 rounded-3"
              >
                Shop Now
              </a>

            </div>

            {/* Right Side Hero Logo */}
            <div className="col-lg-6 text-center">

              <img
                src={heroImg}
                alt="Hero Logo"
                className="img-fluid"
                style={{
                  maxHeight: '400px',
                  width: '400px',
                  objectFit: 'contain',
                }}
              />

            </div>

          </section>

          {/* Features Section */}
          <section className="py-5">

            <div className="text-center mb-5">

              <h2 className="fw-bold">
                Why Choose Pixer
              </h2>

            </div>

            <div className="row g-4">

              {/* Feature 1 */}
              <div className="col-md-4">

                <div className="card border-0 shadow-sm text-center p-4 h-100">

                  <h4>🚀 Fast Delivery</h4>

                  <p className="text-muted">
                    Quick delivery at your doorstep
                  </p>

                </div>

              </div>

              {/* Feature 2 */}
              <div className="col-md-4">

                <div className="card border-0 shadow-sm text-center p-4 h-100">

                  <h4>🔒 Secure Payment</h4>

                  <p className="text-muted">
                    100% safe transactions
                  </p>

                </div>

              </div>

              {/* Feature 3 */}
              <div className="col-md-4">

                <div className="card border-0 shadow-sm text-center p-4 h-100">

                  <h4>💰 Best Prices</h4>

                  <p className="text-muted">
                    Affordable products for everyone
                  </p>

                </div>

              </div>

            </div>

          </section>

          {/* Products Section */}
          <section id="products" className="py-5">

            <h2 className="text-center fw-bold mb-5">
              Featured Products
            </h2>

            <div className="row g-4">

              {products.map((product) => (

                <div key={product.id} className="col-lg-4">

                  <div className="card border-0 shadow h-100 text-center">

                    {/* Product Image */}
                    <img
                      src={product.image}
                      alt={product.title}
                      className="card-img-top"
                      style={{
                        height: '180px',
                        width: '180px',
                        objectFit: 'contain',
                        margin: '20px auto',
                      }}
                    />

                    {/* Product Content */}
                    <div className="card-body">

                      <h4 className="fw-bold">
                        {product.title}
                      </h4>

                      <p className="text-muted">
                        {product.description}
                      </p>

                    </div>

                    {/* Buy Button */}
                    <div className="card-footer bg-white border-0">

                      <button
                        className="btn btn-dark w-100"
                        onClick={() => handleBuyNow(product.title)}
                      >
                        Buy Now
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </section>

        </div>

      </main>

      {/* Footer */}
      <Footer />

    </div>

  );
};

export default App;