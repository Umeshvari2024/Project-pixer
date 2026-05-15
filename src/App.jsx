import React, {
  useState,
  useEffect,
  useContext,
  useMemo
} from 'react';

import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CartContext } from "./context/CartContext";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import heroImg from './assets/Shop Logo.jpg';

const App = () => {

  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {

    if (location.hash === '#products') {

      const section = document.getElementById('products');

      if (section) {

        section.scrollIntoView({
          behavior: 'smooth',
        });

      }

    }

  }, [location]);

  const fetchProducts = async () => {

    try {

      setLoading(true);

      const response = await axios.get(
        "https://fakestoreapi.com/products"
      );

      setProducts(response.data);

      toast.success("Products Loaded Successfully");

    } catch (error) {

      console.log("API Error:", error);

      toast.error("Failed To Load Products");

    } finally {

      setLoading(false);

    }

  };

  const addProduct = async () => {

    const newProduct = {
      title: "Demo Product",
      price: 999,
      description: "New Product Added",
      image: "https://i.pravatar.cc",
      category: "electronics"
    };

    try {

      const response = await axios.post(
        "https://fakestoreapi.com/products",
        newProduct
      );

      console.log(response.data);

      toast.success("Product Added Successfully!");

    } catch (error) {

      console.log(error);

      toast.error("Failed To Add Product");

    }

  };

  const filteredProducts = useMemo(() => {

    return products.filter((product) => {

      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesCategory =
        category === 'All' ||
        product.category === category;

      return matchesSearch && matchesCategory;

    });

  }, [products, searchTerm, category]);

  return (

    <div className="bg-light">

      <Navbar />

      <main>

        <div className="container-fluid px-0">

          <section
            className="row align-items-center"
            style={{
              minHeight: '90vh',
              paddingTop: '50px',
              paddingBottom: '50px',
            }}
          >

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
                Explore top quality electronics,
                smart gadgets, fashion products
                and modern accessories.
              </p>

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

                <button
                  className="btn btn-success btn-lg px-5 py-3"
                  onClick={addProduct}
                >
                  POST API Demo
                </button>

              </div>

            </div>

            <div className="col-lg-6 text-center mt-5 mt-lg-0">

              <img
                src={heroImg}
                alt="Hero Logo"
                loading="lazy"
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

          <section
            id="products"
            className="py-5"
          >

            <div className="container">

              <h2 className="text-center fw-bold mb-5">
                Featured Products
              </h2>

              <div className="row mb-4">

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

                    <option value="electronics">
                      Electronics
                    </option>

                    <option value="jewelery">
                      Jewelery
                    </option>

                    <option value="men's clothing">
                      Men's Clothing
                    </option>

                    <option value="women's clothing">
                      Women's Clothing
                    </option>

                  </select>

                </div>

              </div>

              {loading ? (

                <div className="text-center py-5">

                  <div className="spinner-border text-dark"></div>

                  <p className="mt-3">
                    Loading Products...
                  </p>

                </div>

              ) : (

                <div className="row g-4">

                  {filteredProducts.slice(0, 3).map((product) => (

                    <div
                      key={product.id}
                      className="col-lg-4"
                    >

                      <div className="card border-0 shadow h-100 text-center">

                        <img
                          src={product.image}
                          alt={product.title}
                          loading="lazy"
                          className="card-img-top p-3"
                          style={{
                            height: '220px',
                            objectFit: 'contain',
                          }}
                        />

                        <div className="card-body">

                          <h5 className="fw-bold">
                            {product.title}
                          </h5>

                          <p className="text-muted small">
                            {product.description.substring(0, 80)}...
                          </p>

                          <h5 className="text-success mb-3">
                            ₹ {Math.round(product.price * 85)}
                          </h5>

                        </div>

                        <div className="card-footer bg-white border-0">

                          <div className="d-flex gap-2">

                            <button
                              className="btn btn-primary w-50"
                              onClick={() => {
                                addToCart(product);
                                toast.success("Added To Cart");
                              }}
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

              )}

            </div>

          </section>

        </div>

      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
      />

    </div>

  );

};

export default App;