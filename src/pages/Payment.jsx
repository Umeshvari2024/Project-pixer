import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Payment = () => {

  const [method, setMethod] = useState("");

  const navigate = useNavigate();

  const handlePayment = (e) => {

    e.preventDefault();

    if (!method) {
      alert("Please select payment method");
      return;
    }

    alert(`Payment Successful 🎉 via ${method}`);

    navigate("/");

  };

  return (

    <>
      <Navbar />

      <div className="container py-5">

        <h2 className="fw-bold text-center mb-4">
          💳 Payment Gateway
        </h2>

        <div className="card shadow p-4">

          <form onSubmit={handlePayment}>

            <div className="form-check mb-3">

              <input
                className="form-check-input"
                type="radio"
                checked={method === "Card Payment"}
                onChange={() => setMethod("Card Payment")}
              />

              <label className="form-check-label">
                💳 Card Payment
              </label>

            </div>

            <div className="form-check mb-3">

              <input
                className="form-check-input"
                type="radio"
                checked={method === "UPI Payment"}
                onChange={() => setMethod("UPI Payment")}
              />

              <label className="form-check-label">
                📱 UPI Payment
              </label>

            </div>

            <div className="form-check mb-3">

              <input
                className="form-check-input"
                type="radio"
                checked={method === "Cash on Delivery"}
                onChange={() => setMethod("Cash on Delivery")}
              />

              <label className="form-check-label">
                💰 Cash on Delivery
              </label>

            </div>

            <button
              type="submit"
              className="btn btn-success w-100"
            >
              Proceed Payment
            </button>

          </form>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Payment;