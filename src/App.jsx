import React from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Images
import heroImg from './assets/Shop Logo.jpg';
import tvImg from './assets/tv.jpg';
import acImg from './assets/air-condition.jpg';
import watchImg from './assets/watch_.jpg';

const App = () => {

  // Buy Button Function
  const handleBuyNow = (productName) => {
    alert(`${productName} added successfully!`);
  };

  // Products
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

        <div className="container-fluid px-0">

          {/* HERO SECTION */}

          <section
            className="row align-items-center"
            style={{
              minHeight: '90vh',
              paddingTop: '50px',
              paddingBottom: '50px',
            }}
          >

            {/* LEFT CONTENT */}

            <div className="col-lg-6 px-5">

              <span
                className="badge bg-dark px-4 py-2 mb-4"
                style={{
                  fontSize: '0.9rem',
                  borderRadius: '30px',
                }}
              >
                Modern Shopping Experience
              </span>

              <h1
                className="fw-bold mb-4"
                style={{
                  fontSize: '3rem',
                  lineHeight: '1.2',
                  color: '#111',
                }}
              >
                Discover Premium Products at
                <span className="text-primary">
                  {' '}Pixer Marketplace
                </span>
              </h1>

              <p
                className="mb-4"
                style={{
                  fontSize: '0.95rem',
                  color: '#6c757d',
                  maxWidth: '550px',
                }}
              >
                Explore top quality electronics, smart gadgets,
                luxury accessories and modern appliances with
                stylish shopping experience.
              </p>

              {/* BUTTONS */}

              <div className="d-flex gap-3 flex-wrap">

                <a
                  href="#products"
                  className="btn btn-dark btn-lg px-5 py-3"
                  style={{
                    borderRadius: '12px',
                  }}
                >
                  Shop Now
                </a>

                <button
                  className="btn btn-outline-dark btn-lg px-5 py-3"
                  style={{
                    borderRadius: '12px',
                  }}
                >
                  Explore More
                </button>

              </div>

            </div>

            {/* RIGHT IMAGE */}

            <div className="col-lg-6 text-center mt-5 mt-lg-0">

              <img
                src={heroImg}
                alt="Hero Logo"
                className="img-fluid"
                style={{
                  width: '650px',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  margin: '0 auto',
                }}
              />

            </div>

          </section>

          {/* FEATURES SECTION */}

          <section className="py-5 bg-white">

            <div className="container">

              <div className="text-center mb-5">

                <h2 className="fw-bold">
                  Why Choose Pixer
                </h2>

                <p className="text-muted">
                  Experience premium shopping with trusted services.
                </p>

              </div>

              <div className="row g-4">

                {/* Feature 1 */}

                <div className="col-md-4">

                  <div className="card border-0 shadow-sm text-center p-4 h-100">

                    <h4 className="mb-3">
                      🚀 Fast Delivery
                    </h4>

                    <p className="text-muted">
                      Quick delivery at your doorstep
                      with secure packaging.
                    </p>

                  </div>

                </div>

                {/* Feature 2 */}

                <div className="col-md-4">

                  <div className="card border-0 shadow-sm text-center p-4 h-100">

                    <h4 className="mb-3">
                      🔒 Secure Payment
                    </h4>

                    <p className="text-muted">
                      100% safe and secure online
                      payment methods.
                    </p>

                  </div>

                </div>

                {/* Feature 3 */}

                <div className="col-md-4">

                  <div className="card border-0 shadow-sm text-center p-4 h-100">

                    <h4 className="mb-3">
                      💰 Best Prices
                    </h4>

                    <p className="text-muted">
                      Affordable products with premium
                      quality and offers.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* PRODUCTS SECTION */}

          <section
            id="products"
            className="py-5"
          >

            <div className="container">

              <h2 className="text-center fw-bold mb-5">
                Featured Products
              </h2>

              <div className="row g-4">

                {products.map((product) => (

                  <div
                    key={product.id}
                    className="col-lg-4"
                  >

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

                      {/* Button */}

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