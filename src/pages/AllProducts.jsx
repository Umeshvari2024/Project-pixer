import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CartContext } from "../context/CartContext";

const AllProducts = () => {

  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  const INR = (price) => Math.round(price * 83);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "https://fakestoreapi.com/products"
      );
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-light">

      <Navbar />

      <div className="container py-5">

        <h1 className="text-center fw-bold mb-5">
          All Products
        </h1>

        <div className="row g-4">

          {products.map((product) => (

            <div key={product.id} className="col-lg-4">

              <div className="card shadow border-0 h-100 text-center">

                <img
                  src={product.image}
                  alt={product.title}
                  className="p-3"
                  style={{ height: "220px", objectFit: "contain" }}
                />

                <div className="card-body">

                  <h5>{product.title}</h5>

                  <p className="text-muted small">
                    {product.description.substring(0, 80)}...
                  </p>

                  <h5 className="text-success">
                    ₹ {INR(product.price)}
                  </h5>

                  <span className="badge bg-primary">
                    {product.category}
                  </span>

                </div>

                <div className="card-footer bg-white border-0">

                  <div className="d-flex gap-2">

                    <button
                      className="btn btn-primary w-50"
                      onClick={() => addToCart(product)}
                    >
                      Add To Cart
                    </button>

                    <Link
                      to={"/product-details/" + product.id}
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

      <Footer />
    </div>
  );
};

export default AllProducts;