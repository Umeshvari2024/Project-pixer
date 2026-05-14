import React from 'react';

import { useParams } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Images
import tvImg from '../assets/tv.jpg';
import watchImg from '../assets/watch_.jpg';
import acImg from '../assets/air-condition.jpg';
import fanImg from '../assets/fan.jpg';
import laptopImg from '../assets/laptop.jpg';
import washingImg from '../assets/washing-machine.jpg';

const ProductDetails = () => {

  const { id } = useParams();

  // Products Data
  const products = [

    {
      id: 1,
      title: "Smart LED TV",
      category: "Electronics",
      price: "₹45,999",
      image: tvImg,
      description:
        "Ultra HD display with smart connectivity and immersive sound.",
      features: [
        "4K Ultra HD Display",
        "Smart Connectivity",
        "Dolby Audio",
        "Voice Control",
        "Netflix & YouTube Support",
      ],
    },

    {
      id: 2,
      title: "Luxury Smart Watch",
      category: "Accessories",
      price: "₹8,999",
      image: watchImg,
      description:
        "Fitness tracking, heart rate monitor and smart notifications.",
      features: [
        "Heart Rate Monitor",
        "Fitness Tracking",
        "Water Resistant",
        "Bluetooth Calling",
        "Smart Notifications",
      ],
    },

    {
      id: 3,
      title: "Air Conditioner",
      category: "Home Appliances",
      price: "₹39,999",
      image: acImg,
      description:
        "Energy efficient cooling with silent operation technology.",
      features: [
        "Fast Cooling",
        "Energy Saving",
        "Silent Operation",
        "Remote Control",
        "Turbo Mode",
      ],
    },

    {
      id: 4,
      title: "Cooling Fan",
      category: "Home Appliances",
      price: "₹2,999",
      image: fanImg,
      description:
        "High speed cooling fan with energy saving technology.",
      features: [
        "High Speed Motor",
        "Low Power Consumption",
        "Silent Air Flow",
        "3 Speed Modes",
        "Modern Design",
      ],
    },

    {
      id: 5,
      title: "Gaming Laptop",
      category: "Electronics",
      price: "₹89,999",
      image: laptopImg,
      description:
        "Powerful laptop for gaming, coding and multitasking.",
      features: [
        "Intel i7 Processor",
        "16GB RAM",
        "512GB SSD Storage",
        "RGB Keyboard",
        "Full HD Display",
      ],
    },

    {
      id: 6,
      title: "Washing Machine",
      category: "Home Appliances",
      price: "₹25,999",
      image: washingImg,
      description:
        "Fully automatic washing machine with smart wash modes.",
      features: [
        "Fully Automatic",
        "Smart Wash Modes",
        "Energy Efficient",
        "Quick Wash",
        "Child Lock",
      ],
    },

  ];

  // Find Product
  const product = products.find(
    (item) => item.id === Number(id)
  );

  return (

    <div className="bg-light">

      <Navbar />

      <div className="container py-5">

        <div className="row align-items-center">

          {/* Product Image */}

          <div className="col-lg-6 text-center mb-4">

            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded shadow"
              style={{
                maxHeight: '450px',
                objectFit: 'contain',
              }}
            />

          </div>

          {/* Product Details */}

          <div className="col-lg-6">

            <span className="badge bg-primary mb-3">
              {product.category}
            </span>

            <h1 className="fw-bold mb-3">
              {product.title}
            </h1>

            <h3 className="text-success mb-4">
              {product.price}
            </h3>

            <p className="text-muted mb-4">
              {product.description}
            </p>

            {/* Features */}

            <div className="mb-4">

              <h5 className="fw-bold mb-3">
                Product Features
              </h5>

              <ul className="list-group">

                {product.features.map((feature, index) => (

                  <li
                    key={index}
                    className="list-group-item"
                  >
                    {feature}
                  </li>

                ))}

              </ul>

            </div>

            {/* Buttons */}

            <div className="d-flex gap-3">

              <button
                className="btn btn-dark btn-lg px-4"
                onClick={() =>
                  alert('Product added to cart!')
                }
              >
                Add To Cart
              </button>

              <button
                className="btn btn-outline-dark btn-lg px-4"
                onClick={() =>
                  alert('Order placed successfully!')
                }
              >
                Buy Now
              </button>

              <div className="mt-4">

  <a
    href="/"
    className="btn btn-secondary"
  >
    Back To Products
  </a>

</div>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>

  );

};

export default ProductDetails;