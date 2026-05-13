import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-md-5 col-lg-4">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <h3 className="text-center mb-4 fw-bold">Create Account</h3>
              <form>
                <div className="mb-3">
                  <label className="form-label text-muted">Full Name</label>
                  <input 
                    type="text" 
                    className="form-control form-control-lg border-2" 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
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
                    placeholder="Create password" 
                    required 
                  />
                </div>
                <button type="submit" className="btn btn-success w-100 btn-lg fw-bold mb-3">
                  Register Now
                </button>
                <div className="text-center">
                  <p className="small text-muted">
                    Already have an account? <Link to="/login" className="text-primary fw-bold text-decoration-none">Login here</Link>
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