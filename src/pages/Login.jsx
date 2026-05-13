import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-md-5 col-lg-4">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <h3 className="text-center mb-4 fw-bold">Login to PIXER</h3>
              <form>
                <div className="mb-3">
                  <label className="form-label text-muted">Email address</label>
                  <input 
                    type="email" 
                    className="form-control form-control-lg border-2" 
                    placeholder="name@example.com" 
                    required 
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label text-muted">Password</label>
                  <input 
                    type="password" 
                    className="form-control form-control-lg border-2" 
                    placeholder="Enter password" 
                    required 
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 btn-lg fw-bold mb-3">
                  Sign In
                </button>
                <div className="text-center">
                  <p className="small text-muted">
                    Don't have an account? <Link to="/register" className="text-primary fw-bold text-decoration-none">Register here</Link>
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

export default Login;