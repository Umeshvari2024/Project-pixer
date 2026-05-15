import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  const INR = (price) => Math.round(price * 83);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!product) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  return (
    <div className="bg-light">

      <Navbar />

      <div className="container py-5">

        <div className="row align-items-center">

          <div className="col-lg-6 text-center">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
              style={{ maxHeight: "450px", objectFit: "contain" }}
            />
          </div>

          <div className="col-lg-6">

            <span className="badge bg-primary mb-3">
              {product.category}
            </span>

            <h1 className="fw-bold mb-3">
              {product.title}
            </h1>

            <h3 className="text-success mb-4">
              ₹ {INR(product.price)}
            </h3>

            <p className="text-muted mb-4">
              {product.description}
            </p>

            <div className="d-flex gap-3">

              <button
                className="btn btn-dark btn-lg px-4"
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </button>

            </div>

            <div className="mt-4">

              <Link to="/" className="btn btn-secondary">
                Back To Home
              </Link>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;