import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  // Validation Function
  const validate = () => {

    let newErrors = {};

    // Full Name Validation
    if (!formData.name) {

      newErrors.name = "Full Name is required";

    }

    // Email Validation
    if (!formData.email) {

      newErrors.email = "Email is required";

    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {

      newErrors.email = "Invalid email address";

    }

    // Password Validation
    if (!formData.password) {

      newErrors.password = "Password is required";

    } else if (formData.password.length < 6) {

      newErrors.password =
        "Password must be at least 6 characters";

    }

    // Confirm Password Validation
    if (!formData.confirmPassword) {

      newErrors.confirmPassword =
        "Confirm Password is required";

    } else if (
      formData.confirmPassword !== formData.password
    ) {

      newErrors.confirmPassword =
        "Passwords do not match";

    }

    return newErrors;

  };

  // Submit Form
  const handleSubmit = (e) => {

    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {

      setErrors(validationErrors);

    } else {

      alert("Registration Successful!");

      console.log(formData);

      setErrors({});

    }

  };

  return (

    <div className="container my-5 py-5">

      <div className="row justify-content-center">

        <div className="col-md-5 col-lg-4">

          <div className="card shadow-lg border-0 rounded-4">

            <div className="card-body p-5">

              <h3 className="text-center mb-4 fw-bold">
                Create Account
              </h3>

              <form onSubmit={handleSubmit}>

                {/* Full Name */}

                <div className="mb-3">

                  <label className="form-label text-muted">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    className="form-control form-control-lg border-2"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  {errors.name && (
                    <small className="text-danger">
                      {errors.name}
                    </small>
                  )}

                </div>

                {/* Email */}

                <div className="mb-3">

                  <label className="form-label text-muted">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg border-2"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  {errors.email && (
                    <small className="text-danger">
                      {errors.email}
                    </small>
                  )}

                </div>

                {/* Password */}

                <div className="mb-3">

                  <label className="form-label text-muted">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    className="form-control form-control-lg border-2"
                    placeholder="Create Password"
                    value={formData.password}
                    onChange={handleChange}
                  />

                  {errors.password && (
                    <small className="text-danger">
                      {errors.password}
                    </small>
                  )}

                </div>

                {/* Confirm Password */}

                <div className="mb-4">

                  <label className="form-label text-muted">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control form-control-lg border-2"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />

                  {errors.confirmPassword && (
                    <small className="text-danger">
                      {errors.confirmPassword}
                    </small>
                  )}

                </div>

                {/* Button */}

                <button
                  type="submit"
                  className="btn btn-success w-100 btn-lg fw-bold mb-3"
                >
                  Register Now
                </button>

                {/* Login Link */}

                <div className="text-center">

                  <p className="small text-muted">

                    Already have an account?

                    <Link
                      to="/login"
                      className="text-primary fw-bold text-decoration-none ms-1"
                    >
                      Login here
                    </Link>

                  </p>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Register;