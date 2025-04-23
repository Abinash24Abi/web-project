import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function Login() {
  const [input, setInput] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8989/login', input, {
        withCredentials: true,
      });

      if (res.data.Status === 'success') {
        localStorage.setItem('useremail',input.email)
        localStorage.setItem('react-use-cart',res.data.cartinfo)
        navigate('/');
        window.location.reload();
      } else {
        alert(res.data.Message || 'Login failed');
      }
    } catch (err) {
      alert('Server error');
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light fixed inset-0 backdrop-blur-sm position-fixed top-0 z-10">
      <div className="row shadow-lg w-100" style={{ maxWidth: '900px' }}>
        <div className="col-md-6 bg-success text-white d-flex flex-column justify-content-center align-items-center p-5 rounded-start">
          <h2>Welcome back!</h2>
          <p className="text-center">
            We're happy to see you again.
          </p>
          <button className="btn btn-outline-light mt-3" onClick={() => navigate('/signup')}>
            No account yet? Signup
          </button>
        </div>

        <div className="col-md-6 bg-white p-5 rounded-end">
          <h3 className="mb-4 fw-bold text-center">Login</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              className="form-control mb-3 p-2"
              placeholder="Email"
              value={input.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              className="form-control mb-3 p-2"
              placeholder="Password"
              value={input.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn-success w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
