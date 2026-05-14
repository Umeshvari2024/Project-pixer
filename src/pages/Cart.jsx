import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cart = () => {

  const { cart, removeFromCart } = useContext(CartContext);

  // Total Price
  const totalPrice = cart.reduce(
    (total, item) => total + (item.price || 0),
    0
  );

  return (
    <>
      <Navbar />

      <div className="container py-5">

        <h2 className="fw-bold mb-4 text-center">
          🛒 My Cart
        </h2>

        {cart.length === 0 ? (

          <div className="text-center py-5">
            <h4>Your cart is empty</h4>
          </div>

        ) : (

          <div className="row">

            {/* CART ITEMS */}

            <div className="col-lg-8">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="card shadow-sm border-0 mb-4"
                >

                  <div className="row g-0 align-items-center">

                    {/* IMAGE */}

                    <div className="col-md-3 text-center p-3">

                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid"
                        style={{
                          height: "140px",
                          objectFit: "contain",
                        }}
                      />

                    </div>

                    {/* CONTENT */}

                    <div className="col-md-6">

                      <div className="card-body">

                        <h5 className="fw-bold">
                          {item.title}
                        </h5>

                        <p className="text-muted">
                          {item.description}
                        </p>

                        <span className="badge bg-primary">
                          {item.category}
                        </span>

                      </div>

                    </div>

                    {/* PRICE + BUTTON */}

                    <div className="col-md-3 text-center p-3">

                      <h5 className="text-success mb-3">
                        ₹ {item.price || 999}
                      </h5>

                      <button
                        className="btn btn-danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

            {/* SUMMARY */}

            <div className="col-lg-4">

              <div className="card shadow border-0 p-4">

                <h4 className="mb-4">
                  Order Summary
                </h4>

                <div className="d-flex justify-content-between mb-3">
                  <span>Total Items</span>
                  <span>{cart.length}</span>
                </div>

                <div className="d-flex justify-content-between mb-4">
                  <strong>Total Price</strong>
                  <strong>₹ {totalPrice || cart.length * 999}</strong>
                </div>

                <button className="btn btn-dark w-100 py-2">
                  Proceed to Checkout
                </button>

              </div>

            </div>

          </div>

        )}

      </div>

      <Footer />
    </>
  );
};

export default Cart;