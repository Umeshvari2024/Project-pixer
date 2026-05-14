import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "./context/CartContext";


import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Images
import heroImg from './assets/Shop Logo.jpg';
import tvImg from './assets/tv.jpg';
import acImg from './assets/air-condition.jpg';
import watchImg from './assets/watch_.jpg';
import fanImg from './assets/fan.jpg';
import laptopImg from './assets/laptop.jpg';
import washingImg from './assets/washing-machine.jpg';

const App = () => {

  // Search & Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const { addToCart } = useContext(CartContext);
  

  // Buy Button Function
  const handleBuyNow = (productName) => {
    alert(`${productName} added successfully!`);
  };

  // Products
  const products = [

    {
      id: 1,
      title: "Smart LED TV",
      category: "Electronics",
      price: 45999,
      description:
        "Ultra HD display with smart connectivity and immersive sound.",
      image: tvImg,
    },

    {
      id: 2,
      title: "Luxury Smart Watch",
      category: "Accessories",
      price: 8999,
      description:
        "Fitness tracking, heart rate monitor and smart notifications.",
      image: watchImg,
    },

    {
      id: 3,
      title: "Air Conditioner",
      category: "Home Appliances",
      price: 39999,
      description:
        "Energy efficient cooling with silent operation technology.",
      image: acImg,
    },

    {
  id: 4,
  title: "Cooling Fan",
  category: "Home Appliances",
  price : 2999,
  description:
    "High speed cooling fan with energy saving technology.",
  image: fanImg,
},

{
  id: 5,
  title: "Gaming Laptop",
  category: "Electronics",
  price: 89999,
  description:
    "Powerful laptop for gaming, coding and multitasking.",
  image: laptopImg,
},

{
  id: 6,
  title: "Washing Machine",
  category: "Home Appliances",
  price : 25999,
  description:
    "Fully automatic washing machine with smart wash modes.",
  image: washingImg,
},

  ];

  // Filter Products
  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.title.toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === 'All' ||
      product.category === category;

    return matchesSearch && matchesCategory;

  });

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

              {/* SEARCH & FILTER */}

              <div className="row mb-4">

                {/* Search Bar */}

                <div className="col-md-6 mb-3">

                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) =>
                      setSearchTerm(e.target.value)
                    }
                  />

                </div>

                {/* Category Filter */}

                <div className="col-md-6 mb-3">

                  <select
                    className="form-select form-select-lg"
                    value={category}
                    onChange={(e) =>
                      setCategory(e.target.value)
                    }
                  >

                    <option value="All">
                      All Categories
                    </option>

                    <option value="Electronics">
                      Electronics
                    </option>

                    <option value="Accessories">
                      Accessories
                    </option>

                    <option value="Home Appliances">
                      Home Appliances
                    </option>

                  </select>

                </div>

              </div>

              {/* PRODUCTS */}

              <div className="row g-4">

                {filteredProducts.map((product) => (

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

                        <span className="badge bg-primary">
                          {product.category}
                        </span>

                      </div>

                      

                      {/* Button */}

                      <div className="card-footer bg-white border-0">

  <div className="d-flex gap-2">

    <button
      className="btn btn-primary w-50"
      onClick={() => addToCart(product)}
    >
      Add To Cart
    </button>

    <Link
      to={`/product-details/${product.id}`}
      className="btn btn-dark w-50"
    >
      Details
    </Link>

  </div>

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